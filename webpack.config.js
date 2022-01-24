const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        // filename: 'build_js/[name].bundle.js',
        // filename: 'main_aframe.js',
        // path: path.resolve(__dirname, 'js'),
    },
    optimization: {
        // splitChunks: {
        //     chunks: 'all',
        //     // cacheGroups: {
        //     //     defaultVendors: {
        //     //         filename: 'vendor.bundle.js',
        //     //     },
        //     // },
        // },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: "src/fonts",
                    to: "fonts"
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                // use: ['style-loader', 'css-loader'],
                // generator: {
                //     filename: '[name].bundle.css'
                // },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]_[hash][ext][query]'
                },
            },
        ],
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        writeToDisk: true,
        // https: true,
        open: false,
        contentBase: './dist/',
        // ^-- defaults to working directory
        // publicPath: './dist/',
        watchContentBase: true,
    },
    // hmm does not solve it for me :-(
    // resolve: {
    //     // this allows us to have a symlinked afram.vue file...
    //     // https://github.com/webpack/webpack/issues/1643#issuecomment-956196352
    //     symlinks: false
    // }
};
