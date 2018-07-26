const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader',
                ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name]_[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}