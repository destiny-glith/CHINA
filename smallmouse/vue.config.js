module.exports = {
  publicPath: './',
  devServer: {
    // proxy: 'https://dsapi.beibei.com'
    proxy: {
      '/': {
        target: 'https://106.14.213.84:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}