
## 一、webpack,node跟npm的关系
```
webpack 模块化打包
为了正常运行必须依赖于node
而node环境必须包含各种依赖的包
所以需要npm工具(nodepackage manege)管理
```

## 二、使用webpack
```
webpack  默认(production)生产环境，不可以debug等操作，发布项目时候可以用这个命令打包
webpack --mode development // 开发环境，程序员测试代码的时候用这个命令
可以在config配置文件中设置mode:"development"，则可以使用webpack代替webpack --mode development命令
```

