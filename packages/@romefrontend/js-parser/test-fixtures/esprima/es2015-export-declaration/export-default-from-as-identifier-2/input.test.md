# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-export-declaration > export-default-from-as-identifier-2`

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
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 27
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportDefaultDeclaration {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 26
					index: 26
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSCallExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 25
						index: 25
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				callee: JSReferenceIdentifier {
					name: "from"
					loc: Object {
						filename: "input.js"
						identifierName: "from"
						end: Object {
							column: 19
							index: 19
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
				}
				arguments: Array [
					JSReferenceIdentifier {
						name: "bar"
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 24
								index: 24
								line: 1
							}
							start: Object {
								column: 21
								index: 21
								line: 1
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
