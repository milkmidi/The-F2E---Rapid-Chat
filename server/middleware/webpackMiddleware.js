/* eslint import/no-extraneous-dependencies:off, no-console:0 */
/* eslint global-require:0, no-confusing-arrow:0, max-len: 0 */
const path = require('path');

module.exports = (app) => {
  const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../../internal/webpack/webpack.client.js');

  config.devtool = 'cheap-module-eval-source-map';
  const { entry } = config;
  Object.keys(entry).forEach((key) => {
    entry[key].unshift(hotMiddlewareScript);
  });
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
      colors: true,
    },
  }));
  app.use(webpackHotMiddleware(compiler));

  const fileHandler = htmlName => (req, res) => {
    const filename = path.join(compiler.outputPath, htmlName);
    compiler.outputFileSystem.readFile(filename, (err, file) => {
      if (err) {
        res.sendStatus(404);
        return;
      }
      res.send(file.toString());
    });
  };

  app.get('*', fileHandler('index.html'));
};
