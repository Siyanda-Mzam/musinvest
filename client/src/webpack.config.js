var webpack = require('webpack'),
    path = require('path');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: './main.ts',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: [ root('node_modules/rxjs') ] }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
      { test: /\.(html|scss)$/, loader: 'raw-loader' }
    ]
  },
  devServer: {
    stats: 'errors-only',
    stats : {chunks:false},
    historyApiFallback: true
  }
};
