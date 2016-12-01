var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HooksPlugin = require("./hooks.plugin");

var ENV = process.env.npm_lifecycle_event;
var isDevServer = ENV === 'live';

var mod = {
    devServer: {
        historyApiFallback: {}
    },

    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },
    output: {
        path: helpers.root('dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                exclude: helpers.root('app'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.css$/,
                include: helpers.root('app'),
                loader: 'raw-loader'
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[ext]'
            }
        ]
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root(),
            verbose: true, 
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            cachebust: new Date().getTime(),
            template: './index.html.template', //this should end in anything other than .html otherwise use [Another template option](http://https://github.com/ampedandwired/html-webpack-plugin/blob/master/docs/template-option.md)
            filename: './index.html',
            hash: true,
            inject: false
        }),
        new HooksPlugin({})
    ]
};

if (!isDevServer) {
    mod.plugins.push(
        new CopyWebpackPlugin([{
            from: './ext_resources',
            to: helpers.root('dist/ext_resources')
        }])
    );
}

module.exports = mod;
