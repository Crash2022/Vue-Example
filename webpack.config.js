module.exports = {
    module: {
        rules: [
            // ... other rules omitted

            // this will apply to both plain `.scss` files
            // AND `<style lang="scss">` blocks in `.vue` files
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // plugin omitted

    // не знаю: нужно или нет ?!
    // resolve: {
    //   extensions: ['.js', '.vue', '.json', '.scss'],
    //   alias: {
    //     'vue$': 'vue/dist/vue.esm.js',
    //     '@': resolve('src'),
    //     styles: resolve('src/shared/styles/')
    //   }
    // }
}

// const VueLoaderPlugin = require('vue-loader/lib/plugin')
//
// module.exports = {
//     mode: 'development',
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             },
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader'
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'vue-style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new VueLoaderPlugin()
//     ]
// }

