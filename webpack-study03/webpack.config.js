module.exports = {
    entry:'.src/app.js',
    mode:'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app_build.js'
    },
}