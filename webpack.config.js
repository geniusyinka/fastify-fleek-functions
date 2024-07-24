const path = require('path');
const nodeExternals = require('webpack-node-externals');

  module.exports = {
    entry: "./function.js",
    output: {
      library: {
        type: 'module',
      },
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    mode: "none",
    experiments: {
      outputModule: true,
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
