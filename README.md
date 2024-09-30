# @asdotdev/password-generator

A simple utility tool to generate password in terminal.

## Installation

```
npm install --global @asdotdev/password-generator
```

or, try

```
npx @asdotdev/password-generator

npx @asdotdev/password-generator -u -n -l 16
```

## Usage

```
Usage: pwgen [options]

This utility tool helps you to generate password in terminal.

Options:
  -u, --uppercase        include uppercase (default: false)
  -n, --numbers          include numbers (default: false)
  -s, --symbols          include symbols (default: false)
  -l, --length <number>  length of password (min: 8, max: 64) (default: 8)
  -v, --version          display the current version
  -h, --help             display help for command
```

## Examples

Default is all lowercase characters of with size 8

> pwgen

To add uppercase, numbers and symbols respectivaly

> pwgen -u -n -s

To change leangth of the password

> pwgen -l 12

## Contributing Guide

Read the [CONTRIBUTING](https://github.com/asdotdev/password-generator/blob/master/CONTRIBUTING.md) file to learn about our development process, how to propose bugfixes and improvements.

## License

`@asdotdev/password-generator` is MIT licensed, as found in the [LICENSE](https://github.com/asdotdev/password-generator/blob/master/LICENSE) file.
