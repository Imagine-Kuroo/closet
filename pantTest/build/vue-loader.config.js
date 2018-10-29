module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCss: !isDev,
    cssModules: {},
    // hotReload: false 根据环境变量生成
  }
}