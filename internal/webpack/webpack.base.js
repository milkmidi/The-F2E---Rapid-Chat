const path = require('path');
const { toFilename, createPugHtmlLoaderOptions } = require('./util');

const DEV_MODE = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    app: ['./app.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    path: path.resolve('dist'),
    filename: toFilename('assets/js/[name]'),
    chunkFilename: toFilename('assets/js/[name]-chunk'),
    publicPath: '',
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/assets'),
      path.resolve('node_modules'),
    ],
    alias: {
      '@': path.resolve('src'),
      vue: 'vue/dist/vue.esm.js',
    },
  },
  /*
    ##     ##  #######  ########  ##     ## ##       ########
    ###   ### ##     ## ##     ## ##     ## ##       ##
    #### #### ##     ## ##     ## ##     ## ##       ##
    ## ### ## ##     ## ##     ## ##     ## ##       ######
    ##     ## ##     ## ##     ## ##     ## ##       ##
    ##     ## ##     ## ##     ## ##     ## ##       ##
    ##     ##  #######  ########   #######  ######## ########
  */
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          // https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler#options
          options: { },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules\/(?!(dom7|swiper|ansi-regex|strip-ansi)\/).*/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            name: DEV_MODE ? '[path][name].[ext]' : '[path][name]-[contenthash:8].[ext]',
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        use: ['pug-plain-loader'],
        exclude: path.resolve('src/html'),
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true, // <img src="${require(`./images/gallery.png`)}">
              // attrs: ['img:src', 'link:href'],
            },
          },
          {
            loader: 'pug-html-loader',
            options: createPugHtmlLoaderOptions(),
          },
        ],
        include: path.resolve('src/html'),
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]',
                },
              },
            ],
          },
          {
            use: [
              'vue-style-loader',
              'css-loader',
            ],
          },
        ],
        include: path.resolve('src'),
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              paths: ['src/css/', 'src/assets/', 'src/'],
              sourceMap: true,
              define: {
                DEV_MODE,
              },
              import: [path.resolve('src/css/modules/common.styl')],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: !DEV_MODE ? 'warning' : false,
  },
};
