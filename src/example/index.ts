import { Context, HttpRequest } from "azure-functions-ts-essentials";

export default async function(context: Context, req: HttpRequest) {
  context.log("JavaScript HTTP trigger function processed a request.");

  if (req.query.name || (req.body && req.body.name)) {
    context.res = {
      status: 200,
      body: "Hello " + (req.query.name || req.body.name)
    };
  } else {
    context.res = {
      status: 400,
      body: "Please pass a name on the query string or in the request body"
    };
  }
}
