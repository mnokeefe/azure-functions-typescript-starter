const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const functionFolders = require("./tools/functionFolders");

module.exports = {
  entry: functionFolders,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: ["node_modules", "src"]
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: "src/host.json",
        to: "host.json"
      },
      {
        context: "src",
        from: "**/function.json",
        to: ""
      }
    ])
  ],
  node: {
    __filename: false,
    __dirname: false
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/[name].js",
    libraryTarget: "commonjs2"
  }
};
