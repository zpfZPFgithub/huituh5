const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 1.尽量减小搜索的范围
 */
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
      rules: [
        {
            test:/\.jsx?$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:["env", "stage-0", "react"]
                }
            },
            exclude:/node_modules/
        },
        {
            //file-loader是解析图片地址，把图片从源位置拷贝到目标位置并且修改原引用地址
            //可以处理任意的二进制，bootstrap 里字体
            //url-loader可以在文件比较小的时候，直接变成base64字符串内嵌到页面中
            test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)/,
            loader: {
                loader: 'url-loader',
                options: {
                    limit: 5 * 1024,
                    //指定拷贝文件的输出目录 
                    outputPath: 'images/'
                }
            }
        },
        {
            test:/\.css$/,
            loader:['style-loader','css-loader']
        },
        {
            test: /\.(html|htm)/,
            loader: 'html-withimg-loader'
        }
      ]
    },
    plugins: [
      //new WebpackParallelUglifyPlugin(),
      new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
          hash: true
      }),
    ],

    devServer: {
      contentBase: './dist',
      host: 'localhost',
      port: 8000,
      compress: true//服务器返回给浏览器的时候是否启动gzip压缩
    }
}