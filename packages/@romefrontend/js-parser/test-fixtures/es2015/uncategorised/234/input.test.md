# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 234`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 38
			index: 38
			line: 1
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
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 38
					index: 38
					line: 1
				}
				start: Object {
					column: 14
					index: 14
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 37
						index: 37
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				right: JSReferenceIdentifier {
					name: "obj"
					loc: Object {
						filename: "input.js"
						identifierName: "obj"
						end: Object {
							column: 37
							index: 37
							line: 1
						}
						start: Object {
							column: 34
							index: 34
							line: 1
						}
					}
				}
				left: JSAssignmentObjectPattern {
					rest: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 31
							index: 31
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
					properties: Array [
						JSAssignmentObjectPatternProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "v"
									loc: Object {
										filename: "input.js"
										identifierName: "v"
										end: Object {
											column: 18
											index: 18
											line: 1
										}
										start: Object {
											column: 17
											index: 17
											line: 1
										}
									}
								}
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 18
										index: 18
										line: 1
									}
									start: Object {
										column: 17
										index: 17
										line: 1
									}
								}
							}
							value: JSAssignmentIdentifier {
								name: "arguments"
								loc: Object {
									filename: "input.js"
									identifierName: "arguments"
									end: Object {
										column: 29
										index: 29
										line: 1
									}
									start: Object {
										column: 20
										index: 20
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 29
									index: 29
									line: 1
								}
								start: Object {
									column: 17
									index: 17
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
✔ No known problems!

```
