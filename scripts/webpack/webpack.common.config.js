const path = require('path');

const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const ProgressBarPlugin = require('webpackbar');

module.exports = {
  entry: { index: path.resolve(__dirname, '../../src/index.tsx') }, // 打包入口
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist'), // 打包出口
    clean: true,
  },
  stats: "errors-warnings",
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // webpack处理的文件后缀名
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, 
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new CleanTerminalPlugin(), new ProgressBarPlugin()], // 清空命令行 && 进度条
  optimization: {
    usedExports: false,
  },
};