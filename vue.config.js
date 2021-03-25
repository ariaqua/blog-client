const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: isDev ? '/client' : '/',
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  chainWebpack: config => {
    config.module.rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  }
}
