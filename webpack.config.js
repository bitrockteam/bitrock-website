
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';
const devMode = process.env.NODE_ENV !== 'production'
const dist = './dist';
const minify = devMode ? false : true;

module.exports = {
  entry: {
    bitrock: './src/index.js',
    // 'sw.fetch': './src/sw.fetch.js'
  },
  mode: env,
  output: {
    path: path.join(__dirname, dist),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new WebpackNotifierPlugin({
      title: pkg.name,
      alwaysNotify: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new FaviconsWebpackPlugin('./src/assets/logotype.png'),
    new WebpackPwaManifest({
      name: 'Bitrock',
      fingerprints: false,
      theme_color: "#2a2a2a",
      short_name: 'Bitrock',
      // start_url: 'https://bitrockteam.github.io/bitrock-website/',
      description: 'What does it take to look beyond?',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/assets/logotype.png'),
          sizes: [96, 128, 192, 256, 512]
        }
      ]
    }),
    new HtmlWebpackPlugin({
      title: pkg.name,
      name: pkg.displayName,
      description: pkg.description,
      color: pkg.config.themeColor,
      template: './src/pages/index.html',
      filename: 'index.html',
      minify
    }),
    // new HtmlWebpackPlugin({
    //   title: pkg.name,
    //   template: './src/pages/typography.html',
    //   filename: './typography/index.html',
    //   minify
    // })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]',
              context: ''
            }
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // }
    ]
  },
  optimization: {
    minimize: false
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