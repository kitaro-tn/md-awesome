const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ts/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
   extensions: [".ts"]
  },
  output: {
    filename: "md-awesome.js",
    path: path.resolve(__dirname, "dist/js")
  }
};
