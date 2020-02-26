import axios from "axios";

/**
 * 网络请求的封装
 */

 //初版
// export function request(config){
//   return new Promise((resolve,reject) => {
//     //1.创建实例
//     const instance = axios.create({
//       baseURL:'http://127.0.0.1:5500/',
//       timeout:5000
//     })

//     instance(config)
//   })
// }

//终极版
export function request(config){
  const instance = axios.create({
    baseURL:'http://127.0.0.1:5500',
    timeout:5000
  })

  // 6.拦截器的使用
  // 实例.interceptors.[request/response].use(成功时回调函数,失败时回调函数)
  instance.interceptors.request.use(
    config => {
      console.log('我是请求拦截器====成功',config)
      //记得要返回config
      return config
  },
    err => {
      console.log('我是请求拦截器====失败',err)
  })

  instance.interceptors.response.use(
    res => {
      console.log('我是响应拦截器====成功',res)
      //记得要返回config
      return config
  },
    err => {
      console.log('我是响应拦截器====失败',err)
  })

  return instance(config)
  //因为axios实例本身返回一个promise
}