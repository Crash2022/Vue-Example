const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // resolve: {
  //   extensions: ['.js', '.vue', '.json', '.scss'],
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js',
  //     '@': resolve('src'),
  //     styles: resolve('src/shared/styles/')
  //   }
  // }
})
