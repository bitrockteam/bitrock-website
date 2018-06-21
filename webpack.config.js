
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')
const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';
const dist = './dist';

module.exports = {
  entry: {
    demo: './src/index.js'
  },
  mode: env,
  output: {
    path: path.join(__dirname, dist),
    filename: 'bitrock.js',
    chunkFilename: '[chunk].js'
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: pkg.name,
      alwaysNotify: true
    }),
    // new FaviconsWebpackPlugin('./src/assets/logotype.png'),
    new WebpackPwaManifest({
      name: 'Bitrock',
      fingerprints: false,
      theme_color: "#2a2a2a",
      short_name: 'Bitrock',
      description: 'What does it take to look beyond?',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/assets/logotype.png'),
          sizes: [96, 128, 192, 256]
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: './src/pages/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: pkg.name,
      template: './src/pages/typography.html',
      filename: 'typography.html'
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     'css-loader?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
      //     'sass-loader'],
      //   exclude: fs.realpathSync('./src/styles')
      // },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'],
        // include: fs.realpathSync('./src/styles')
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, dist),
    watchContentBase: true,
    watchOptions: {
      poll: true
    },
    compress: true,
    port: 8090,
    host: 'localhost',
    hot: true,
    inline: true,
    historyApiFallback: true
  }
};