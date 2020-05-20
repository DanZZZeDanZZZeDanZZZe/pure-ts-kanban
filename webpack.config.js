const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

console.log('isDev =', isDev)

const filename = ext =>
  isDev ?
    `[name].${ext}` :
    `[name].[hash].${ext}`

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env',
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }
  return opts
}
const styleLoaders = loader => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev
      }
    },
    'css-loader'
  ]

  if (loader) {
    loaders.push(loader)
  }
  return loaders
}
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDev ? 'development' : 'production',
  entry: {
    main: ['@babel/polyfill', './index.ts']
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  devServer: {
    port: 4200,
    hot: true
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      },
      hot: isDev
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: styleLoaders()
      },
      {
        test: /\.s[ac]ss$/i,
        use: styleLoaders('sass-loader')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions()
          }
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions('@babel/preset-typescript')
          }
        ]
      }
    ]
  }
}