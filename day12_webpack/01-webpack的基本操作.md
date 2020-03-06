
## 一、webpack,node跟npm的关系
```
webpack
  作用：进行模块化打包，他会分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能
        直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用
  工作方式：把你的项目当做一个整体，通过一个给定的主文件（如：index.js）,Webpack将从这个文件开始
            找到你的项目的所有依赖文件,使用loaders处理它们，最后打包为一个浏览器可识别的JavaScript文件。
其为了正常运行必须依赖于node
而node环境必须包含各种依赖的包
所以需要npm工具(nodepackage manage)来帮忙管理
```

## 二、使用webpack
```
webpack  默认(production)生产环境，不可以debug等操作，发布项目时候可以用这个命令打包
webpack --mode development // 开发环境，程序员测试代码的时候用这个命令
可以在config配置文件中设置mode:"development"，则可以使用webpack代替webpack --mode development命令
```

