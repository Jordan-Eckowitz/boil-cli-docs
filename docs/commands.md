---
id: commands
title: Commands
---

## Initialize a Boilerplate Library

Call this command to initialize a new Boil template directory. This generates a `.boilerplate` folder at the root of your current directory. It contains an example template folder called `component` as well as a `global.args.yml` file and a template function.

:::info

**[See here](how-it-works.md)** for more details on the template folder structure, syntax and purpose of the `*.args.yml` files.

:::

```text
USAGE
  $ boil init

OPTIONS
  -h, --help  show CLI help
```

## Create a New Template

Create a new template directory using this command.

It will generate a new folder in the `.boilerplate` directory, with the provided name, as well as a `local.args.yml` file. You can optionally pass in a list of arguments to pre-fill the `local.args.yml` file with settings for local arguments.

```text
USAGE
  $ boil create [NAME]

ARGUMENTS
  NAME  template name

OPTIONS
  -a, --args=args  local template args
  -h, --help       show CLI help
```

Here's some examples.

```sh
# template with no arguments (can be added later)
boil create person

# template with name, surname & age arguments
boil create person --args name,surname,age
boil create person -a name,surname,age
```

## Create a New Template Function

Create a new boilerplate template function.

This generates a `*.js` file in the `.boilerplate` directory with the provided name.

```text
USAGE
  $ boil create-function [NAME]

ARGUMENTS
  NAME  template function name

OPTIONS
  -h, --help  show CLI help
```

Here's an example.

```sh
# creates a function called timestamp.js
boil create-function timestamp
```

## Cook Up Some Boilerplate

This is what you'll do when you want to generate boilerplate from one of your templates.

After entering the command below, the CLI will prompt you where you'd like to save the generated boilerplate files and/or folders.

```text
USAGE
  $ boil up TEMPLATE

ARGUMENTS
  TEMPLATE  call up a template defined in the '.boilerplate' directory

OPTIONS
  -h, --help  show CLI help
```

Here's some examples.

```sh
boil up component --name App --filetype js
boil up component -n App -ft js
```

Don't worry if you can't remember what argument inputs are required for a template. If you simply type `boil up [TEMPLATE NAME]` (without any arguments) then you'll get a summary table of all required inputs.

Here's an example output.

```text
$ boil up component

⛔ your args don't match the template requirements

boil up component ARGS

Name [--]      Shorthand [-]       Default        Options              Description
name           n                   undefined      undefined            component name
filetype       ft                  js             [ 'js', 'py', 'go' ] file type
```

## List All Templates

If you want to see a list of all templates in your boilerplate directory then use the command below.

```text
USAGE
  $ boil list

OPTIONS
  -h, --help  show CLI help
```
