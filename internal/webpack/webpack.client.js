/* eslint no-console:0, max-len:0 */
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackBar = require('webpackbar');
const { toFilename } = require('./util');
const base = require('./webpack.base');

const DEV_MODE = process.env.NODE_ENV === 'development';

const webpackConfig = merge(base, {
  /*
  ########  ##       ##     ##  ######   #### ##    ##  ######
  ##     ## ##       ##     ## ##    ##   ##  ###   ## ##    ##
  ##     ## ##       ##     ## ##         ##  ####  ## ##
  ########  ##       ##     ## ##   ####  ##  ## ## ##  ######
  ##        ##       ##     ## ##    ##   ##  ##  ####       ##
  ##        ##       ##     ## ##    ##   ##  ##   ### ##    ##
  ##        ########  #######   ######   #### ##    ##  ######
  */
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'html/index.pug',
      filename: 'index.html',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new CopyWebpackPlugin([
      { from: 'assets/copy', to: './', ignore: ['.*'] },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        VUE_ENV: JSON.stringify('client'),
        APP_ENV: JSON.stringify(process.env.APP_ENV),
        DEV_MODE,
      },
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: toFilename('assets/css/[name]', 'css'),
      chunkFilename: toFilename('assets/css/[name]-chunk', 'css'),
    }),
    ...DEV_MODE
      ? [
        new FriendlyErrorsPlugin(),
      ]
      : [
        new webpack.HashedModuleIdsPlugin(),
        new OptimizeCSSAssetsPlugin({}),
      ],
  ],

  /*
    ########  ######## ##     ##  ######  ######## ########  ##     ## ######## ########
    ##     ## ##       ##     ## ##    ## ##       ##     ## ##     ## ##       ##     ##
    ##     ## ##       ##     ## ##       ##       ##     ## ##     ## ##       ##     ##
    ##     ## ######   ##     ##  ######  ######   ########  ##     ## ######   ########
    ##     ## ##        ##   ##        ## ##       ##   ##    ##   ##  ##       ##   ##
    ##     ## ##         ## ##   ##    ## ##       ##    ##    ## ##   ##       ##    ##
    ########  ########    ###     ######  ######## ##     ##    ###    ######## ##     ##
  */
  devServer: {
    before(app) {
      app.get('/__healthy', (req, res) => {
        res.json({ status: 200, message: 'I\'m healthy' });
      });
    },
    historyApiFallback: true,
    noInfo: true,
    port: 3000,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      chunks: false,
      chunkModules: false,
      children: false,
    },
    host: '0.0.0.0',
    disableHostCheck: true,
    /*  proxy: [
      {
        context: ['/upload', '/api'],
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    ], */
  },
  /*
   #######  ########  ######## #### ##     ## #### ########    ###    ######## ####  #######  ##    ##
  ##     ## ##     ##    ##     ##  ###   ###  ##       ##    ## ##      ##     ##  ##     ## ###   ##
  ##     ## ##     ##    ##     ##  #### ####  ##      ##    ##   ##     ##     ##  ##     ## ####  ##
  ##     ## ########     ##     ##  ## ### ##  ##     ##    ##     ##    ##     ##  ##     ## ## ## ##
  ##     ## ##           ##     ##  ##     ##  ##    ##     #########    ##     ##  ##     ## ##  ####
  ##     ## ##           ##     ##  ##     ##  ##   ##      ##     ##    ##     ##  ##     ## ##   ###
   #######  ##           ##    #### ##     ## #### ######## ##     ##    ##    ####  #######  ##    ##
  */
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 100,
      minChunks: 1,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendors: {
          name: 'vendors',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  },
});

/*
######   #######  ##    ## ########  #### ######## ####  #######  ##    ##    ###    ##        ######
##    ## ##     ## ###   ## ##     ##  ##     ##     ##  ##     ## ###   ##   ## ##   ##       ##    ##
##       ##     ## ####  ## ##     ##  ##     ##     ##  ##     ## ####  ##  ##   ##  ##       ##
##       ##     ## ## ## ## ##     ##  ##     ##     ##  ##     ## ## ## ## ##     ## ##        ######
##       ##     ## ##  #### ##     ##  ##     ##     ##  ##     ## ##  #### ######### ##             ##
##    ## ##     ## ##   ### ##     ##  ##     ##     ##  ##     ## ##   ### ##     ## ##       ##    ##
 ######   #######  ##    ## ########  ####    ##    ####  #######  ##    ## ##     ## ########  ######
*/
if (!DEV_MODE) {
  const stylusLoader = webpackConfig.module.rules.find(({ test }) => test.test('.stylus'));
  // Replace the `vue-style-loader` with
  // the MiniCssExtractPlugin loader.
  stylusLoader.use[0] = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../',
    },
  };
}
module.exports = webpackConfig;
