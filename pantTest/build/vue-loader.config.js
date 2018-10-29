module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCss: !isDev,
    cssModules: {  //todo：cssModules没有配置成功
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    // hotReload: false 根据环境变量生成
  }
}