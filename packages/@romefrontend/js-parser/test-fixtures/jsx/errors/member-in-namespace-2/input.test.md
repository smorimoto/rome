# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > errors > member-in-namespace-2`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "input.jsx"
		end: Object {
			column: 0
			index: 10
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
				filename: "input.jsx"
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
			expression: JSXElement {
				name: JSXMemberExpression {
					loc: Object {
						filename: "input.jsx"
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
					property: JSXIdentifier {
						name: "c"
						loc: Object {
							filename: "input.jsx"
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
					object: JSXNamespacedName {
						name: JSXIdentifier {
							name: "b"
							loc: Object {
								filename: "input.jsx"
								end: Object {
									column: 4
									index: 4
									line: 1
								}
								start: Object {
									column: 3
									index: 3
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.jsx"
							end: Object {
								column: 4
								index: 4
								line: 1
							}
							start: Object {
								column: 1
								index: 1
								line: 1
							}
						}
						namespace: JSXIdentifier {
							name: "a"
							loc: Object {
								filename: "input.jsx"
								end: Object {
									column: 2
									index: 2
									line: 1
								}
								start: Object {
									column: 1
									index: 1
									line: 1
								}
							}
						}
					}
				}
				attributes: Array []
				children: Array []
				selfClosing: true
				typeArguments: undefined
				loc: Object {
					filename: "input.jsx"
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
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
