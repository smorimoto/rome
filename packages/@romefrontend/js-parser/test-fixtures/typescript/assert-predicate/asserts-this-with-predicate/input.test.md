# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > assert-predicate > asserts-this-with-predicate`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
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
			index: 88
			line: 5
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unexpected token, expected {"}
			}
			location: Object {
				filename: "input.ts"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 26
					index: 38
					line: 2
				}
				start: Object {
					column: 24
					index: 36
					line: 2
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: Object {
					filename: "input.ts"
					identifierName: "Foo"
					end: Object {
						column: 9
						index: 9
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
					index: 87
					line: 4
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
						index: 87
						line: 4
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
								name: "isBar"
								loc: Object {
									filename: "input.ts"
									identifierName: "isBar"
									end: Object {
										column: 7
										index: 19
										line: 2
									}
									start: Object {
										column: 2
										index: 14
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 7
									index: 19
									line: 2
								}
								start: Object {
									column: 2
									index: 14
									line: 2
								}
							}
						}
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 1
								index: 87
								line: 4
							}
							start: Object {
								column: 2
								index: 14
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
								index: 14
								line: 2
							}
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 7
									index: 19
									line: 2
								}
								start: Object {
									column: 2
									index: 14
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
									column: 23
									index: 35
									line: 2
								}
								start: Object {
									column: 7
									index: 19
									line: 2
								}
							}
							returnType: TSTypePredicate {
								asserts: true
								typeAnnotation: undefined
								loc: Object {
									filename: "input.ts"
									end: Object {
										column: 23
										index: 35
										line: 2
									}
									start: Object {
										column: 9
										index: 21
										line: 2
									}
								}
								parameterName: JSIdentifier {
									name: "this"
									loc: Object {
										filename: "input.ts"
										identifierName: "this"
										end: Object {
											column: 23
											index: 35
											line: 2
										}
										start: Object {
											column: 19
											index: 31
											line: 2
										}
									}
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "input.ts"
								end: Object {
									column: 1
									index: 87
									line: 4
								}
								start: Object {
									column: 24
									index: 36
									line: 2
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 26
											index: 38
											line: 2
										}
										start: Object {
											column: 24
											index: 36
											line: 2
										}
									}
									expression: JSReferenceIdentifier {
										name: "is"
										loc: Object {
											filename: "input.ts"
											identifierName: "is"
											end: Object {
												column: 26
												index: 38
												line: 2
											}
											start: Object {
												column: 24
												index: 36
												line: 2
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 30
											index: 42
											line: 2
										}
										start: Object {
											column: 27
											index: 39
											line: 2
										}
									}
									expression: JSReferenceIdentifier {
										name: "Foo"
										loc: Object {
											filename: "input.ts"
											identifierName: "Foo"
											end: Object {
												column: 30
												index: 42
												line: 2
											}
											start: Object {
												column: 27
												index: 39
												line: 2
											}
										}
									}
								}
								JSBlockStatement {
									body: Array []
									directives: Array []
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 33
											index: 45
											line: 2
										}
										start: Object {
											column: 31
											index: 43
											line: 2
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 12
											index: 58
											line: 3
										}
										start: Object {
											column: 2
											index: 48
											line: 3
										}
									}
									expression: JSAssignmentExpression {
										operator: "="
										loc: Object {
											filename: "input.ts"
											end: Object {
												column: 12
												index: 58
												line: 3
											}
											start: Object {
												column: 2
												index: 48
												line: 3
											}
										}
										right: JSReferenceIdentifier {
											name: "INVALID_PLACEHOLDER"
											loc: Object {
												filename: "input.ts"
												end: Object {
													column: 11
													index: 57
													line: 3
												}
												start: Object {
													column: 11
													index: 57
													line: 3
												}
											}
										}
										left: JSAssignmentIdentifier {
											name: "isBaz"
											loc: Object {
												filename: "input.ts"
												identifierName: "isBaz"
												end: Object {
													column: 7
													index: 53
													line: 3
												}
												start: Object {
													column: 2
													index: 48
													line: 3
												}
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 13
											index: 59
											line: 3
										}
										start: Object {
											column: 12
											index: 58
											line: 3
										}
									}
									expression: JSReferenceIdentifier {
										name: "INVALID_PLACEHOLDER"
										loc: Object {
											filename: "input.ts"
											end: Object {
												column: 13
												index: 59
												line: 3
											}
											start: Object {
												column: 12
												index: 58
												line: 3
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 21
											index: 67
											line: 3
										}
										start: Object {
											column: 14
											index: 60
											line: 3
										}
									}
									expression: JSReferenceIdentifier {
										name: "asserts"
										loc: Object {
											filename: "input.ts"
											identifierName: "asserts"
											end: Object {
												column: 21
												index: 67
												line: 3
											}
											start: Object {
												column: 14
												index: 60
												line: 3
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 26
											index: 72
											line: 3
										}
										start: Object {
											column: 22
											index: 68
											line: 3
										}
									}
									expression: JSThisExpression {
										loc: Object {
											filename: "input.ts"
											end: Object {
												column: 26
												index: 72
												line: 3
											}
											start: Object {
												column: 22
												index: 68
												line: 3
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 29
											index: 75
											line: 3
										}
										start: Object {
											column: 27
											index: 73
											line: 3
										}
									}
									expression: JSReferenceIdentifier {
										name: "is"
										loc: Object {
											filename: "input.ts"
											identifierName: "is"
											end: Object {
												column: 29
												index: 75
												line: 3
											}
											start: Object {
												column: 27
												index: 73
												line: 3
											}
										}
									}
								}
								JSExpressionStatement {
									loc: Object {
										filename: "input.ts"
										end: Object {
											column: 39
											index: 85
											line: 3
										}
										start: Object {
											column: 30
											index: 76
											line: 3
										}
									}
									expression: JSArrowFunctionExpression {
										loc: Object {
											filename: "input.ts"
											end: Object {
												column: 39
												index: 85
												line: 3
											}
											start: Object {
												column: 30
												index: 76
												line: 3
											}
										}
										body: JSBlockStatement {
											body: Array []
											directives: Array []
											loc: Object {
												filename: "input.ts"
												end: Object {
													column: 39
													index: 85
													line: 3
												}
												start: Object {
													column: 37
													index: 83
													line: 3
												}
											}
										}
										head: JSFunctionHead {
											async: false
											hasHoistedVars: false
											rest: undefined
											thisType: undefined
											loc: Object {
												filename: "input.ts"
												end: Object {
													column: 36
													index: 82
													line: 3
												}
												start: Object {
													column: 30
													index: 76
													line: 3
												}
											}
											params: Array [
												JSBindingIdentifier {
													name: "Foo"
													loc: Object {
														filename: "input.ts"
														identifierName: "Foo"
														end: Object {
															column: 33
															index: 79
															line: 3
														}
														start: Object {
															column: 30
															index: 76
															line: 3
														}
													}
												}
											]
										}
									}
								}
							]
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

 input.ts:2:24 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected {

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
