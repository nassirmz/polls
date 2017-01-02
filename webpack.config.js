module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname,
    filename: '/public/bundle.js',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
      },
      {
        loader: 'style!css',
        test: /\.css$?/,
      },
    ],
  },
};