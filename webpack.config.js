/** @type {import('webpack').Configuration} */
const config = {
    mode: 'development',
    entry: {
        app: __dirname + '/main.js',
    },
    output: {
        devtoolModuleFilenameTemplate: info => {
            console.log(info.absoluteResourcePath)
            return 'file:///' + info.absoluteResourcePath
        },
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
}

module.exports = config
