# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-properties > await-in-async-in-private-property`

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
			index: 41
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: Object {
					filename: "input.js"
					identifierName: "C"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 40
					line: 3
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 40
						line: 3
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "p"
								loc: Object {
									filename: "input.js"
									identifierName: "p"
									end: Object {
										column: 4
										index: 14
										line: 2
									}
									start: Object {
										column: 3
										index: 13
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 14
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						value: JSArrowFunctionExpression {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 27
									index: 37
									line: 2
								}
								start: Object {
									column: 7
									index: 17
									line: 2
								}
							}
							head: JSFunctionHead {
								async: true
								hasHoistedVars: false
								params: Array []
								rest: undefined
								returnType: undefined
								thisType: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 18
										index: 28
										line: 2
									}
									start: Object {
										column: 7
										index: 17
										line: 2
									}
								}
							}
							body: JSAwaitExpression {
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 27
										index: 37
										line: 2
									}
									start: Object {
										column: 19
										index: 29
										line: 2
									}
								}
								argument: JSNumericLiteral {
									value: 42
									format: undefined
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 27
											index: 37
											line: 2
										}
										start: Object {
											column: 25
											index: 35
											line: 2
										}
									}
								}
							}
						}
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 28
								index: 38
								line: 2
							}
							start: Object {
								column: 2
								index: 12
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 12
								line: 2
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 4
									index: 14
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
