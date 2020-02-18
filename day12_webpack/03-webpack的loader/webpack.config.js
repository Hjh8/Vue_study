const path = require('path') //commonjs的导入方式
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
      }
    ]
  }
}