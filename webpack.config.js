const nodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  mode: 'development',
  externals: [nodeExternals(), {
    'worker_threads': 'commonjs worker_threads',
    'module': 'commonjs module',
    'os': 'commonjs os',
    'fs': 'commonjs fs',
  }],
  entry: './express.js',
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: 'current',
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
};

module.exports = [config];
