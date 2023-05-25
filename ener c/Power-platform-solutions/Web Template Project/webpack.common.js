const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/bundle.tsx'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '\\build'
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({ uglifyOptions: { output: { comments: false } } })],
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
  }
};
