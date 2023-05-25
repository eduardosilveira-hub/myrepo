const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const glob = require('glob');
const fs = require('fs');

const entry = {  };
const htmlfiles = glob.sync(__dirname + '\\src\\web-templates\\**\\*.html');
const htmlPlugins = [];

htmlfiles.forEach((el, i) => {
  const fragments = el.split('/');
  if (fragments.includes('node_modules')) return;

  const name = fragments[fragments.length - 1].replace('.html', '');
  const HtmlPath = fragments.slice(0, fragments.length - 1).join('/') + '/' + name + '.html';
  const JsPath = fragments.slice(0, fragments.length - 1).join('/') + '/' + name + '.tsx';
  entry[name] = JsPath;
  const content = fs.readFileSync(HtmlPath).toString();

  htmlPlugins.push(new HtmlWebpackPlugin({
    inject: false,
    filename: fragments[fragments.length - 1],
    templateContent: ({htmlWebpackPlugin, compilation}) => {
      if (!compilation.assets) return `content`;

      const css = compilation.assets[name + '.css'];
      let cssSource = '';
      if (css) cssSource = css.source();

      // const js = compilation.assets[name + '.js'];
      // let jsSource = '';
      // if (js) jsSource = js.source();
      if (content.includes('#STYLES')) {
        return content.replace(/#STYLES/g, `\n<style>\n${cssSource}\n</style>\n`);
      }

      return `<style>\n${cssSource}\n</style>\n${content}`;
    }
  }));
});

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

module.exports = {
  mode: 'development',
  entry: entry,
  output: {
    filename: '[name].js',
    path: __dirname + '\\Web Templates'
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    ...htmlPlugins,
    new RemoveFilesPlugin()
  ],
  // optimization: {
  //   minimizer: [new UglifyJsPlugin({ uglifyOptions: { output: { comments: false } } })],
  // },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.html$/i,
        loader: ["html-loader","raw-loader",],
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.pug', '.html', '.css', '.scss']
  }
};

