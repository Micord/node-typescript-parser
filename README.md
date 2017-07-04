# node typescript parser

This package is a TypeScript and ECMAScript parser. It uses the underlying typescript parser to generate
a more or less human readable AST out of .js or .ts files.

[![Build Status](https://travis-ci.org/TypeScript-Heroes/node-typescript-parser.svg)](https://travis-ci.org/TypeScript-Heroes/node-typescript-parser)
[![npm](https://img.shields.io/npm/v/typescript-parser.svg?maxAge=3600)](https://www.npmjs.com/package/typescript-parser)
[![Coverage status](https://img.shields.io/coveralls/TypeScript-Heroes/node-typescript-parser.svg?maxAge=3600)](https://coveralls.io/github/TypeScript-Heroes/node-typescript-parser)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## How to use

After you install the package via:

[![NPM](https://nodei.co/npm/typescript-parser.png?downloads=true&stars=true)](https://nodei.co/npm/typescript-parser/)

You can use the parser with:

```typescript
const parser = new TypescriptParser();

// either:
const parsed = await parser.parseSource(/* typescript source code as string */);

// or a filepath
const parsed = await parser.parseSource('/user/myfile.ts', 'workspace root');
```

You can also parse multiple files at ones.

To use the declaration index (which is basically a list of symbols for your files)
instantiate an index first and throw him some files.

After the parsing is done, you'll get an index with resolved
exports and declarations.

Keep in mind, that the index'll only contain exported declarations.

## Changelog

The changelog is generated by [semantic release](https://github.com/semantic-release/semantic-release) and is located under the 
[release section](https://github.com/TypeScript-Heroes/node-typescript-parser/releases).

## Licence

This software is licenced under the [MIT](LICENSE) licence.
