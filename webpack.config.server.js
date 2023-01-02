const path = require('path')
const nodeExternals = require('webpack-node-externals');

const mode = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  name: "server",
  entry: './src/server/index.ts',
  target: "node",
  mode,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
                decorators: true,
              },
            }
          }
        }
      },
    ]
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.tsx', '.ts'],
  }
};