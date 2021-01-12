module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "ジ〇リタイトルメーカー",
    }
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  }
}