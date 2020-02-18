//导入对象中定义的变量
//import {flag,name} from "./aaa.js"
//if(flag){
//    console.log(name,"是天才")
//}

//导入全部变量并命名为h
import * as h from "./aaa.js"
if(h.flag){
    console.log(h.name,"是天才")
}


//导入函数
import {mul} from "./aaa.js"
console.log(mul(30))

//导入类
import {Person} from "./aaa.js"
const p =  new Person()
p.run()



//接收default
import address from "./aaa.js"
console.log(address)

// 依赖css文件
require('../css/normal.css')
