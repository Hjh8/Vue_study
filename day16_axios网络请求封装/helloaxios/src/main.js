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
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   method:'get',
//   params:{
//     type:'pop',
//     page:3
//   }
// }).then(res => {
//   console.log(res)
// })

// 2.axios发送并发请求
// axios.all([
//   axios({
//     url:'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url:'http://123.207.32.32:8000/home/data',
//     params:{
//       type:'sell',
//       page:3
//     }
//   })
// ])
// .then(results => {
//   console.log(results)
//   console.log(results[0])
//   console.log(results[1])
// })

// 3.axios全局配置信息
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000


// axios.all([
//   axios({
//     url:'/home/multidata'
//   }),
//   axios({
//     url:'/home/data',
//     params:{
//       type:'sell',
//       page:3
//     }
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
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})
// const instance2 = axios.create({
//   //在创建实例的时候，创建此实例的全局配置
//   baseURL:'http://111.367.32.32:8880',
//   timeout:100000
// })

instance1({
  url:'./home/multidata'
}).then(res => {
  console.log('我是instance1实例的一个请求')
})

instance1({
  url:'./home/data',
  params:{
    type:'pop',
    page:1
  }
}).then(res => {
  console.log('我是instance1实例的一个请求')
})


