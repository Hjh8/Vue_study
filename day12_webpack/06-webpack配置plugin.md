
plugin：插件，用来扩展。(loder是一个加载器,加载文件到webpack)
配置步骤：
```
    1.npm install 对应的plugin(大部分官网可以找到)
    2.在webpack配置文件中配置plugin:[new 对应的plugin]
```
常见插件:
```
HtmlWebpackPlugin        打包index.html
UglifyjsWebpackPlugin    压缩js
```
***
webpack-dev-sever       搭建本地服务器
```js

    1.npm install --save-dev webpack-dev-sever
    2.在配置文件中设置:
            devSever:{
                contentBase:'./dest', //为哪一个文件夹提供本地服务，默认是根文件夹
                //port  端口号
                inline:true //页面实时更新
            }
    3.在package.json中配置脚本信息
            "dev":"webpack-dev-sever --open"
```
注意：此时配置完成。但现在改动的内容是暂时存放在内存中，只有webpack之后，才会将改动的内容更新到硬盘上

