const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
  if (typeof process.env.PUBLIC_URL === 'undefined') {
    process.env.PUBLIC_URL = 'public'
  }

  const ModuleNames = ['']

  const GlobalSCSSPaths = ModuleNames.map(name =>
    path.resolve(__dirname, `src/${name ? `${name}/` : ''}styles`)
  )

  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
    },
    mode: process.env.NODE_ENV || 'development',
    devtool: 'source-map',
    resolve: {
      modules: [
        path.resolve(__dirname, 'src/components'),
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
    devServer: {
      port: 3002,
      historyApiFallback: true,
      clientLogLevel: 'warn',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          resolve: {
            extensions: ['.js', '.jsx'],
          },
          use: 'babel-loader',
        },
        {
          test: /\.scss$/,
          exclude: /styles/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[hash:base64:5]',
                },
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          include: GlobalSCSSPaths,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff2?|otf)$/,
          use: 'file-loader',
        },
        {
          test: /\.(json)$/,
          type: 'javascript/auto',
          include: path.resolve(__dirname, 'config'),
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        favicon: path.join(__dirname, 'public', 'favicon.ico'),
        manifest: path.join(__dirname, 'public', 'manifest.json'),
      }),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: process.env.PUBLIC_URL,
      }),
      new webpack.EnvironmentPlugin(process.env),
    ],
  }
}
