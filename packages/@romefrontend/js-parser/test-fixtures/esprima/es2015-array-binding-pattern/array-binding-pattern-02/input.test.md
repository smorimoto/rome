# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-array-binding-pattern > array-binding-pattern-02`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
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
			index: 12
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 11
					index: 11
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: JSNumericLiteral {
					value: 0
					format: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 10
							index: 10
							line: 1
						}
						start: Object {
							column: 9
							index: 9
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
							column: 9
							index: 9
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					params: Array [
						JSBindingArrayPattern {
							rest: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 6
									index: 6
									line: 1
								}
								start: Object {
									column: 1
									index: 1
									line: 1
								}
							}
							elements: Array [
								JSBindingIdentifier {
									name: "a"
									loc: Object {
										filename: "input.js"
										identifierName: "a"
										end: Object {
											column: 3
											index: 3
											line: 1
										}
										start: Object {
											column: 2
											index: 2
											line: 1
										}
									}
								}
								JSBindingIdentifier {
									name: "b"
									loc: Object {
										filename: "input.js"
										identifierName: "b"
										end: Object {
											column: 5
											index: 5
											line: 1
										}
										start: Object {
											column: 4
											index: 4
											line: 1
										}
									}
								}
							]
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
✔ No known problems!

```
