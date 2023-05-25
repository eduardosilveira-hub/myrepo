const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

const entry = {};
const pugfiles = glob.sync(__dirname + '\\src\\**\\*.pug');
const htmlPlugins = [];

class RemoveFilesPlugin {
  apply(compiler) {
    compiler.hooks.done.tap(
      'removeFilesPlugin',
      () => {
        const fs = require('fs');
        let buildFiles = glob.sync(compiler.outputPath + '\\*.js');
        buildFiles.forEach(x => fs.unlinkSync(x));
        buildFiles = glob.sync(compiler.outputPath + '\\*.css');
        buildFiles.forEach(x => fs.unlinkSync(x));
      });
  }
}

pugfiles.forEach(el => {
  const fragments = el.split('/');
  if (fragments.includes('node_modules')) return;

  entry[fragments[fragments.length - 1].replace('.pug', '')] =
    fragments.slice(0, fragments.length - 1).join('/') + '/' + fragments[fragments.length - 1].replace('.pug', '') + '.tsx';

  htmlPlugins.push(new HtmlWebpackPlugin({
    inject: false,
    filename: fragments[fragments.length - 1].replace('.pug', '.html'),
    template: el
  }));
});

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: entry,
  output: {
    filename: '[name].js',
    path: __dirname + '\\Templates'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new RemoveFilesPlugin(),
    ...htmlPlugins
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({ uglifyOptions: { output: { comments: false } } })],
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.pug']
  }
};
