# Azure Functions Typescript Webpack

## Pre-requisites

[Azure Function Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local) for local function app development

- `npm install -g azure-functions-core-tools`

# Commands

- `npm run build` to create a clean build in `/dist`
- `npm run watch` to run the function host and typescript compilation in a single terminal for local development.
  Alternatively you can use `watch:ts` and `watch:func` in separate terminals.

## Development

Work in `/src`. Any folders that contain a `function.json` will be picked up by webpack with `index.ts` as the entry point.
