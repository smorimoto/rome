# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 231`

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
			column: 42
			index: 42
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSIfStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 42
					index: 42
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: JSReferenceIdentifier {
				name: "morning"
				loc: Object {
					filename: "input.js"
					identifierName: "morning"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 4
						index: 4
						line: 1
					}
				}
			}
			alternate: JSExpressionStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 42
						index: 42
						line: 1
					}
					start: Object {
						column: 33
						index: 33
						line: 1
					}
				}
				expression: JSCallExpression {
					arguments: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 42
							index: 42
							line: 1
						}
						start: Object {
							column: 33
							index: 33
							line: 1
						}
					}
					callee: JSReferenceIdentifier {
						name: "goodDay"
						loc: Object {
							filename: "input.js"
							identifierName: "goodDay"
							end: Object {
								column: 40
								index: 40
								line: 1
							}
							start: Object {
								column: 33
								index: 33
								line: 1
							}
						}
					}
				}
			}
			consequent: JSExpressionStatement {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 27
						index: 27
						line: 1
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
				expression: JSCallExpression {
					arguments: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 26
							index: 26
							line: 1
						}
						start: Object {
							column: 13
							index: 13
							line: 1
						}
					}
					callee: JSReferenceIdentifier {
						name: "goodMorning"
						loc: Object {
							filename: "input.js"
							identifierName: "goodMorning"
							end: Object {
								column: 24
								index: 24
								line: 1
							}
							start: Object {
								column: 13
								index: 13
								line: 1
							}
						}
					}
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
