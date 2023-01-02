const path = require('path')
const mode = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  name: "client",
  entry: './src/app/index.tsx',
  target: "web",
  mode,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
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