module.exports = function (xdc) {
  xdc.add('preLoader.js', {
    test: /\.jsx?$/,
    exclude: /node_modules|bower_components/,
    loader: 'eslint-loader'
  })

  xdc.add('preLoader.vue', {
    test: /\.vue$/,
    exclude: /node_modules|bower_components/,
    loader: 'eslint-loader'
  })

  xdc.config.eslint = {
    formatter: require('eslint-friendly-formatter'),
    // eslint error 会打断 webpack build 过程
    emitWarning: true
  }
}
