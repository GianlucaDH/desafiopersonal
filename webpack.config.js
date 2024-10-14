const path = require('path');

module.exports = {
  entry: './src/main/resources/js/index.js',
  output: {
    path: path.resolve(__dirname, 'src/main/resources/static'),
    filename: 'bundle.js',
  },
  mode: "production",
  resolve: {
      extensions: [".js", ".jsx", ".json", ".sass"]
  },
  module: {
    rules: [{
        test: /\.(js|jsx)/,
        use: 'babel-loader',
        exclude: /node_modules/
    }, {
        test: /\.s[ac]ss/,
        use: ['style-loader','css-loader','sass-loader']
    }, {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
    }]
  }
};