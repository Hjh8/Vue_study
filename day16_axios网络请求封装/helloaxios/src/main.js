import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/**
 * axios.methods(config)或者axios(config)在config设置method即可
 * 本身返回一个promise
 */
import axios from 'axios'


//1.axios的基本使用
// axios.get(
//   'http://127.0.0.1:5500/day0_js和ES6的补充/',
//   {
//     params:{
//       name:"hang"
//     }
//   }).then(res => {
//   console.log(res)
// })

// axios({
//   url:'http://127.0.0.1:5500/day10_组件化高级/',
//   method:'get'
// }).then(res => {
//   console.log(res)
// })

// 2.axios发送并发请求
// axios.all([
//   axios({
//     url:'http://127.0.0.1:5500/day0_js和ES6的补充/'
//   }),
//   axios({
//     url:'http://127.0.0.1:5500/day10_组件化高级/'
//   })
// ])
// .then(results => {
//   console.log(results)
//   console.log(results[0])
//   console.log(results[1])
// })

// 3.axios全局配置信息
// axios.defaults.baseURL = 'http://127.0.0.1:5500/'
// axios.defaults.timeout = 5000

// axios.all([
//   axios({
//     url:'/day10_组件化高级'
//   }),
//   axios({
//     url:'/day0_js和ES6的补充'
//   })
// ])
// .then(results => {
//   console.log(results)
//   console.log(results[0])
//   console.log(results[1])
// })

// 4.创建axios实例(常用) 因为很多时候会发送多个请求，而这些请求分别需要不同的全局配置
const instance1 = axios.create({
  //在创建实例的时候，创建此实例的全局配置
  baseURL:'http://127.0.0.1:5500',
  timeout:5000
})
// const instance2 = axios.create({
//   //在创建实例的时候，创建此实例的全局配置
//   baseURL:'http://127.0.0.1:5500',
//   timeout:100000
// })

// instance1({
//   url:'/day1_Vue初体验'
// }).then(res => {
//   console.log('我是instance1实例的一个请求')
// })
instance1.interceptors.request.use(
  config => {
    console.log('我是请求拦截器====成功',config)
      //记得要返回config
      return config
  },
  err => {
    console.log('我是请求拦截器====失败',err)
  }
)
instance1({
  url:'/day1_Vue初体验',
  params:{
    type:'pop',
    page:1
  }
}).then(res => {
  console.log('我是instance1实例的一个请求')
})

//5.网络请求封装
// import {request} from './network/request.js'
// request({
//   url:'/day1_Vue初体验'
// })
// .then(
//   res => {console.log('封装请求成功',res)})
// .catch(
//   err => {console.log('封装请求失败',err)}
// )

