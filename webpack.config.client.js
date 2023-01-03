const { HotModuleReplacementPlugin } = require('webpack')
const path = require('path')
const dotenv = require('dotenv')
const mode = process.env.NODE_ENV === "production" ? "production" : "development"
const isDEV = process.env.NODE_ENV === "development";

dotenv.config()

const PORT = process.env.PORT

let entries = ['./src/app/index.tsx']
let plugins = []

if (isDEV) {
  entries.unshift(`webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true`)
  plugins.push(new HotModuleReplacementPlugin())
}

module.exports = {
  name: "client",
  entry: entries,
  target: "web",
  mode,
  output: {
    path: isDEV ? __dirname : path.join(__dirname, 'dist'),
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
  plugins,
  devServer: {
    hot: true,
    port: PORT,
    open: true,
    historyApiFallback: true
  },
};