module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        'postcss-loader',
        'less-loader',
      ]
    }]
  }
};