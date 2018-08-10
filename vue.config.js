module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  lintOnSave: false,
  productionSourceMap: true,

  // 配置 webpack-dev-server 行为。
  devServer: {
    port: 8888,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: null
  },
}