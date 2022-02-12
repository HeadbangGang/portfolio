const path = require('path')
const Webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  mode: IS_DEV ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].min.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devServer: {
    publicPath: '/',
    contentBase: '/dist',
    hot: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 3000,
    disableHostCheck: true,
    open: true
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    }),
    new HtmlWebpackPlugin({
      template: './freemarker/portfolio.ftl',
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([
      { from: './assets', to: 'assets' }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: IS_DEV ? '[local]' : '[sha1:hash:hex:16]',
            },
            importLoaders: 2,
            sourceMap: IS_DEV
          }
        }, {
          loader: 'less-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.pdf$/,
        loader: 'file-loader?name=[name].[ext]',
        options: {
          outputPath: 'assets/'
        }
      }
    ]
  }
}
