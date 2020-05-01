/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TestWorkerBridgeRunOptions} from '../common/bridges/TestWorkerBridge';
import {deriveDiagnosticFromError} from '@romejs/diagnostics';
import {TestWorkerBridge} from '@romejs/core';
import {createBridgeFromParentProcess} from '@romejs/events';
import TestWorkerRunner, {TestWorkerFileResult} from './TestWorkerRunner';
import inspector = require('inspector');

export type TestWorkerFlags = {
  inspectorPort: number;
};

export default class TestWorker {
  constructor() {
    this.bridge = this.buildBridge();
    this.runners = new Map();
  }

  runners: Map<number, TestWorkerRunner>;
  bridge: TestWorkerBridge;

  async init(flags: TestWorkerFlags) {
    inspector.open(flags.inspectorPort);

    await this.bridge.handshake();
  }

  buildBridge(): TestWorkerBridge {
    const bridge = createBridgeFromParentProcess(
      TestWorkerBridge,
      {
        type: 'server',
      },
    );

    process.on(
      'unhandledRejection',
      (err) => {
        bridge.testError.send({
          ref: undefined,
          diagnostic: deriveDiagnosticFromError({
            error: err,
            category: 'tests/unhandledRejection',
          }),
        });
      },
    );

    bridge.inspectorDetails.subscribe(() => {
      return {
        inspectorUrl: inspector.url(),
      };
    });

    bridge.prepareTest.subscribe((data) => {
      return this.prepareTest(data);
    });

    bridge.runTest.subscribe((id: number) => {
      return this.runTest(id);
    });

    return bridge;
  }

  async runTest(id: number): Promise<TestWorkerFileResult> {
    const runner = this.runners.get(id);
    if (runner === undefined) {
      throw new Error(`No runner ${id} found`);
    } else {
      return await runner.run();
    }
  }

  async prepareTest(opts: TestWorkerBridgeRunOptions): Promise<void> {
    const runner = new TestWorkerRunner(opts, this.bridge);
    await runner.prepare();
    this.runners.set(opts.id, runner);
  }
}
