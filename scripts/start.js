const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../config/webpack.config.dev");
const paths = require("../config/paths");

const compiler = webpack(webpackConfig);

const host = process.env.HOST || "0.0.0.0";

const server = new WebpackDevServer(compiler, {
  disableHostCheck: false,
  compress: true,
  clientLogLevel: "none",
  contentBase: paths.appPublic,
  watchContentBase: true,
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  https: false,
  host,
  overlay: false
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Starting server on http://localhost:3000");
});
