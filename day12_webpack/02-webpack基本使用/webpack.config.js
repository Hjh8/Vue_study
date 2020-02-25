//commonjs的导入方式
const path = require('path') //导入node下的path

module.exports = { //单个导入文件
    entry:'./src/mmm.js',
    output:{ // 出口
        path:path.resolve(__dirname, 'dist'), // 要使用绝对路径
        filename:'bundle.js'
    },
    mode:"development"
}

//module.exports = { //多个导入文件(多个入口)
//    entry:{
//        './src/mmm.js',
//        './src/main.js',
//        './src/bbb.js'
//    }
//    output:{ // 出口
//        path:path.resolve(__dirname, 'dist'), // 要使用绝对路径
//        filename:'[name].bundle.js'
//    }
//}