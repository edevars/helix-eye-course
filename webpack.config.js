const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.([jt]sx?)?$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/public/index.html'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true
  },
};