import path from 'path';
import webpack from 'webpack';
const hotMiddlewareScript = 'webpack-hot-middleware/client' +
    '?path=/__webpack_hmr&timeout=20000&reload=true';


// noinspection JSUnresolvedFunction
export default {
    devtool: 'eval',
    entry: ['./src/index', hotMiddlewareScript],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/,
            include: __dirname,
        }],
    },
    plugins: [
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this misspelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),

    ],
};
