# Azure Functions Typescript Webpack

## Development

Install [Azure Function Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local) to run the function locally: `npm install -g azure-functions-core-tools`

`/src` acts as the root of your function app. You will need to add a `local.settings.json` to your `/src` folder. Example file:

```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node"
  }
}
```

Use `npm run watch` to run the function host and typescript compilation in a single terminal for local development. Alternatively use `watch:ts` and `watch:func` in separate terminals.

## Production

To zip deploy for use with `WEBSITE_RUN_FROM_PACKAGE=1`

- `npm run build:prod`
- Zip up `build`
- `az functionapp deployment source config-zip -g <RESOURCE_GROUP> -n <FUNCTION_NAME> --src <PATH_TO_ZIP>`
