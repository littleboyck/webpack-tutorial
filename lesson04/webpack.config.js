let path = require('path');

module.exports = {
    entry:{
        login_build:'./src/login.js',
        home_build:'./src/home.js'
    },
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[hash:7].js'
        // name--> 指向entry对象的key名称 
        // hash--> 随机生成7位哈希值
    }

}