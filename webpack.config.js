const path = require('path');

module.exports = {
  entry: './react-datatable/src/DataTable.js',
  output: {
    path: path.resolve(__dirname, 'src/assets/react'),
    filename: 'datatable.bundle.js',
    library: 'DataTable',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

