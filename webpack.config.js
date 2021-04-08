const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: "inline-source-map",
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "build.js",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            hash: true
        })
    ],
    devServer: {
        port: 3000,
        open: true,
        hot: true
    }
}