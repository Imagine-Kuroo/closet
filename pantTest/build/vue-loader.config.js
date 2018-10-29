module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCss: !isDev,
    cssModules: {
      localIdentName: '[hash:base64:5]',
      camelCase: true
    },
    // hotReload: false 根据环境变量生成
  }
}