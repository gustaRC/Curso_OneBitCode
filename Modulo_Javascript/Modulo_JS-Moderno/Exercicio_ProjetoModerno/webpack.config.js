const path = require("path");

module.exports = {
  entry: {
    index: "./src/build.js",
    teste: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].exercicio.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        exclude: path.resolve(__dirname, "node_modules"),
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
};
