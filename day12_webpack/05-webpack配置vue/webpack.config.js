const path = require('path') //commonjs的导入方式
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = { //单个导入文件
    entry:'./src/js/mmm.js',
    output:{ // 出口
        path:path.resolve(__dirname, 'dist'), // 要使用绝对路径
        filename:'bundle.js'
    },
    mode:"development",
    module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //css-loader只负责将css文件进行加载，style-loder负责将样式添加到dom中
          //webpack使用多个loder时是从右向左的
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 38000,
              name:'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test:/\.vue$/,
        use:[{
            loader: 'vue-loader'
        }]
      }
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}