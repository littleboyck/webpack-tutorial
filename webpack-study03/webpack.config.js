let path = require('path')
module.exports = {
    entry:{
        home:'./src/home.js',
        login:'./src/login.js',
        shopCard:'./src/shop_card.js'
    },
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
}