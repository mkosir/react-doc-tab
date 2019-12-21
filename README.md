# pre-alpha (non-working) version

# StoryTab 📑

_Generate documentation in Storybook tab 📑_

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![npm version][npm-badge]][npm-url]
[![TypeScript][typescript-badge]][typescript-url]

<!-- toc -->
* [pre-alpha (non-working) version](#pre-alpha-non-working-version)
* [StoryTab 📑](#storytab-)
* [Commands](#commands)
<!-- tocstop -->

## Install

Install StoryTab

- npm `npm install story-tab --save-dev`
- yarn `yarn add story-tab --dev`

Install StoryTab Template for _framework_ that you are using:

_React_

- npm `npm install story-tab-template-react`
- yarn `yarn add story-tab-template-react`

## Usage

To generate StoryTab components in your project:

- name files as **`[file name].storytab.[ext]`**
- from your terminal cd into your project and run **`$ storytab generate react`**

Import generated StoryTab components into Storybook. 🎉

Generated files will be prefixed with `_` for example:  
`MyComponent.storytab.jsx` & `MyComponent.storytab.css` -> `_MyComponent.jsx`

# Commands

<!-- commands -->
* [`storytab generate FRAMEWORK`](#storytab-generate-framework)
* [`storytab help [COMMAND]`](#storytab-help-command)

## `storytab generate FRAMEWORK`

generate documentation

```
USAGE
  $ storytab generate FRAMEWORK

ARGUMENTS
  FRAMEWORK  (react) generate StoryTab for desired framework

OPTIONS
  --prefix=prefix  [default: _] generate StoryTab components with filename prefix
```

_See code: [src/commands/generate.ts](https://github.com/mkosir/story-tab/blob/v1.0.7/src/commands/generate.ts)_

## `storytab help [COMMAND]`

display help for storytab

```
USAGE
  $ storytab help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.2/src/commands/help.ts)_
<!-- commandsstop -->

[npm-url]: https://www.npmjs.com/package/story-tab
[npm-badge]: https://img.shields.io/npm/v/story-tab.svg
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
