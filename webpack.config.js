const path = require('path');


module.exports = {

    watch: true,

    entry: {
        app: './src/index.ts',
    },

    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue?$/,
                loader: 'vue-loader',
                // options: {
                //     loaders: {
                //         'scss': 'vue-style-loader!css-loader!sass-loader',
                //         'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                //         'css': 'vue-style-loader!css-loader'
                //     }
                // }
            },
        ]
    },

    resolve: {
        extensions: ['.json', '.ts', '.js', '.vue'],
        alias: {
            vue: 'vue/dist/vue.js'
          }
    },

    devtool: 'inline-source-map'

};