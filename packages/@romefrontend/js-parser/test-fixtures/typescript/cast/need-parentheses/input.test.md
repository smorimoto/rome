# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > need-parentheses`

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
			index: 29
			line: 4
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
				filename: "input.ts"
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
			expression: JSMemberExpression {
				loc: Object {
					filename: "input.ts"
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
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "y"
						loc: Object {
							filename: "input.ts"
							identifierName: "y"
							end: Object {
								column: 9
								index: 9
								line: 1
							}
							start: Object {
								column: 8
								index: 8
								line: 1
							}
						}
					}
					loc: Object {
						filename: "input.ts"
						identifierName: "y"
						end: Object {
							column: 9
							index: 9
							line: 1
						}
						start: Object {
							column: 8
							index: 8
							line: 1
						}
					}
				}
				object: TSTypeAssertion {
					loc: Object {
						filename: "input.ts"
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
					expression: JSReferenceIdentifier {
						name: "x"
						loc: Object {
							filename: "input.ts"
							identifierName: "x"
							end: Object {
								column: 6
								index: 6
								line: 1
							}
							start: Object {
								column: 5
								index: 5
								line: 1
							}
						}
					}
					typeAnnotation: TSTypeReference {
						typeParameters: undefined
						loc: Object {
							filename: "input.ts"
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
						typeName: JSReferenceIdentifier {
							name: "T"
							loc: Object {
								filename: "input.ts"
								identifierName: "T"
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
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 11
					index: 22
					line: 2
				}
				start: Object {
					column: 0
					index: 11
					line: 2
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 10
						index: 21
						line: 2
					}
					start: Object {
						column: 0
						index: 11
						line: 2
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "y"
						loc: Object {
							filename: "input.ts"
							identifierName: "y"
							end: Object {
								column: 10
								index: 21
								line: 2
							}
							start: Object {
								column: 9
								index: 20
								line: 2
							}
						}
					}
					loc: Object {
						filename: "input.ts"
						identifierName: "y"
						end: Object {
							column: 10
							index: 21
							line: 2
						}
						start: Object {
							column: 9
							index: 20
							line: 2
						}
					}
				}
				object: TSAsExpression {
					loc: Object {
						filename: "input.ts"
						end: Object {
							column: 7
							index: 18
							line: 2
						}
						start: Object {
							column: 1
							index: 12
							line: 2
						}
					}
					expression: JSReferenceIdentifier {
						name: "x"
						loc: Object {
							filename: "input.ts"
							identifierName: "x"
							end: Object {
								column: 2
								index: 13
								line: 2
							}
							start: Object {
								column: 1
								index: 12
								line: 2
							}
						}
					}
					typeAnnotation: TSTypeReference {
						typeParameters: undefined
						loc: Object {
							filename: "input.ts"
							end: Object {
								column: 7
								index: 18
								line: 2
							}
							start: Object {
								column: 6
								index: 17
								line: 2
							}
						}
						typeName: JSReferenceIdentifier {
							name: "T"
							loc: Object {
								filename: "input.ts"
								identifierName: "T"
								end: Object {
									column: 7
									index: 18
									line: 2
								}
								start: Object {
									column: 6
									index: 17
									line: 2
								}
							}
						}
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 5
					index: 28
					line: 3
				}
				start: Object {
					column: 0
					index: 23
					line: 3
				}
			}
			expression: JSMemberExpression {
				loc: Object {
					filename: "input.ts"
					end: Object {
						column: 4
						index: 27
						line: 3
					}
					start: Object {
						column: 0
						index: 23
						line: 3
					}
				}
				object: TSNonNullExpression {
					loc: Object {
						filename: "input.ts"
						end: Object {
							column: 2
							index: 25
							line: 3
						}
						start: Object {
							column: 0
							index: 23
							line: 3
						}
					}
					expression: JSReferenceIdentifier {
						name: "x"
						loc: Object {
							filename: "input.ts"
							identifierName: "x"
							end: Object {
								column: 1
								index: 24
								line: 3
							}
							start: Object {
								column: 0
								index: 23
								line: 3
							}
						}
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "y"
						loc: Object {
							filename: "input.ts"
							identifierName: "y"
							end: Object {
								column: 4
								index: 27
								line: 3
							}
							start: Object {
								column: 3
								index: 26
								line: 3
							}
						}
					}
					loc: Object {
						filename: "input.ts"
						identifierName: "y"
						end: Object {
							column: 4
							index: 27
							line: 3
						}
						start: Object {
							column: 3
							index: 26
							line: 3
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
