const { merge } = require('webpack-merge');

const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    // ./public 是 webpack-dev-server 默认的静态资源目录。
    // 添加 webpack-dev-server 开发服务器的配置
  }
});