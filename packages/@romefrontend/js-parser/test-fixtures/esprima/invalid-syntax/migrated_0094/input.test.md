# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0094`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 24
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	directives: Array [
		JSDirective {
			value: "use strict"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Legacy octal literals are not allowed in strict mode"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 23
					index: 23
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 14
					index: 14
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 23
						index: 23
						line: 1
					}
					start: Object {
						column: 14
						index: 14
						line: 1
					}
				}
				body: JSNumericLiteral {
					value: 0
					format: "octal"
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 23
							index: 23
							line: 1
						}
						start: Object {
							column: 21
							index: 21
							line: 1
						}
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 20
							index: 20
							line: 1
						}
						start: Object {
							column: 14
							index: 14
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "a"
							loc: Object {
								filename: "input.js"
								identifierName: "a"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:23 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Legacy octal literals are not allowed in strict mode

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
