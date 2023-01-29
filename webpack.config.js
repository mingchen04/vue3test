// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            reactivityTransform: true
          }
        }
      ]
    }
  }
  