const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');//用来合并配置文件
const base = require('./webpack.base.config');
let other = '';
if (process.env.NODE_ENV == 'development') {
    other = require('./webpack.dev.config');
} else {
    other = require('./webpack.prod.config');
}

module.exports = merge(base, other);