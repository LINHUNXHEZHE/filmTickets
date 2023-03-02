const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/gateway': {
        target: 'https://m.maizuo.com',
        changeOrigin: true
        // Headers: {
        //   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16753207015161962279272449","bc":"440100"}',
        //   'X-Host': 'mall.film-ticket.film.list'
        // }
      }
    }
  }
})
