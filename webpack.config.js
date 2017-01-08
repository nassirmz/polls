module.exports = {
  entry: './src/index.jsx',

  output: {
    path: __dirname,
    filename: '/public/bundle.js',
  },

  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components',
      './src/containers',
    ],
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
      },
      {
        loader: 'style!css',
        test: /\.css?$/,
      },
    ],
  },
};