
const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const workboxPlugin = require('workbox-webpack-plugin');
const pkg = require('./package.json');

const env = process.env.NODE_ENV || 'development';
const devMode = process.env.NODE_ENV !== 'production'
const dist = './dist';
const minify = devMode ? false : true;

module.exports = {
  entry: {
    bitrock: './src/index.js',
  },
  mode: env,
  output: {
    path: path.resolve(__dirname, dist),
    filename: '[name].[hash].js',
    chunkFilename: 'js/[name].[hash].js',
    publicPath: '/'
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
      start_url: '/',
      description: 'What does it take to look beyond?',
      background_color: '#ffffff',
      version: `${pkg.version}.${new Date().toISOString()}`,
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
      template: './src/assets/index.html',
      filename: 'index.html',
      minify
    }),

    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: [
        "**/*.{jpg,js,png,ico,json,html,css}"
      ],
    })

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
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true
  }
};