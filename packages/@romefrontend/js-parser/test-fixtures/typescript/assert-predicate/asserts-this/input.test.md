# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > assert-predicate > asserts-this`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 0
			index: 36
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
					filename: "input.ts"
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
				filename: "input.ts"
				end: Object {
					column: 1
					index: 35
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
					filename: "input.ts"
					end: Object {
						column: 1
						index: 35
						line: 3
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "m"
								loc: Object {
									filename: "input.ts"
									identifierName: "m"
									end: Object {
										column: 3
										index: 13
										line: 2
									}
									start: Object {
										column: 2
										index: 12
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 3
									index: 13
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 22
								index: 32
								line: 2
							}
							start: Object {
								column: 2
								index: 12
								line: 2
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 22
									index: 32
									line: 2
								}
								start: Object {
									column: 20
									index: 30
									line: 2
								}
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
								filename: "input.ts"
								end: Object {
									column: 3
									index: 13
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 19
									index: 29
									line: 2
								}
								start: Object {
									column: 3
									index: 13
									line: 2
								}
							}
							returnType: TSTypePredicate {
								asserts: true
								typeAnnotation: undefined
								loc: Object {
									filename: "input.ts"
									end: Object {
										column: 19
										index: 29
										line: 2
									}
									start: Object {
										column: 5
										index: 15
										line: 2
									}
								}
								parameterName: JSIdentifier {
									name: "this"
									loc: Object {
										filename: "input.ts"
										identifierName: "this"
										end: Object {
											column: 19
											index: 29
											line: 2
										}
										start: Object {
											column: 15
											index: 25
											line: 2
										}
									}
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
