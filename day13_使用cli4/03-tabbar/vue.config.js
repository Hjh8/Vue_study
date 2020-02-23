
import { join } from 'path';//引入path模块
function resolve(dir){
    return join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


export function chainWebpack(config) {
    config.resolve.alias
        .set('@', resolve('./src'))
        .set('components', resolve('@/components'))
        .set('assets', resolve('@/assets'))
        .set('views', resolve('@/views'));
        //set第一个参数：设置的别名，第二个参数：设置的路径
        //在src中使用别名时应该在路径前面加波浪线(~)
}