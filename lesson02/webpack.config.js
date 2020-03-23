let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'buildIndex.js'
    },
    plugins: [
        new HtmlWebpackPlugin()  //这将会产生一个包含以下内容的文件 dist/index.html
    ]
}
