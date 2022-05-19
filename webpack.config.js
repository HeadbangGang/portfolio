const path = require('path')
const Webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
    entry: './src/index.tsx',
    mode: IS_DEV ? 'development' : 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].min.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        allowedHosts: ['0.0.0.0', 'dev.taydenflitcroft.com'],
        historyApiFallback: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new Webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        }),
        new HtmlWebpackPlugin({
            template: './template/index.html',
            minify: {
                collapseWhitespace: !IS_DEV
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './assets', to: 'assets' }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.min.css'
        }),
        new CssMinimizerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            }, {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }, {
                test: /\.s(c|a)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            }, {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.pdf$|\.webp$/,
                type: 'asset/resource'
            }
        ]
    },
    optimization: {
        minimize: !IS_DEV,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
    }
}
