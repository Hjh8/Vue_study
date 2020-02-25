// 将html的script标签的type设成module表示js作为模块化
var name = '啊杭'
var age = 18
var flag = true

function sum(s1,s2){
    return s1+s2
}

if(flag){
    console.log(sum(20,30))
}
//导出方式一
export {name,age,flag}

//导出方式二
export var n = 1000;

//导出函数，类 方式一 直接加个export
function mul(num){
    return num/10;
}

class Person{
    run(){
        console.log('人在跑')
    }
}

//导出函数，类 方式二
export {mul,Person}

//5.export default (只能使用一次，不然会出混乱)
// 可以在导入的时候自定义变量名来接收，也不永加{}
const addr = '广东省'
export default addr;

