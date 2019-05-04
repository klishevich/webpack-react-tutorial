const HtmlWebPackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  mode: "production",
  output: {
    path: paths.appBuild,
    publicPath: paths.servedPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.appHtml
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
