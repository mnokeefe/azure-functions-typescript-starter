const fs = require("fs");
const path = require("path");

const FUNCTION_DIRECTORY = "./src";

const functionFolders = fs
  .readdirSync(FUNCTION_DIRECTORY, { withFileTypes: true })
  .filter(name => {
    const filePath = path.join(FUNCTION_DIRECTORY, name);
    const stat = fs.statSync(filePath);
    return (
      stat.isDirectory() && fs.readdirSync(filePath).includes("function.json")
    );
  })
  .map(name => ({
    [name]: `${FUNCTION_DIRECTORY}/${name}/index.ts`
  }))
  .reduce((a, b) => ({ ...a, ...b }));

module.exports = functionFolders;
