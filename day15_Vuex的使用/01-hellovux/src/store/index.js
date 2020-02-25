import Vue from 'vue'
import Vuex from 'vuex'

/**
 *  vuex是一个状态管理模式。
 *        所谓状态管理简单理解就是把需要多个组件共享的变量全部存储到一个对象里
 *        也可以理解成一个全局变量，在每个函数中都可以使用
 *      
 */
const moduleA = {
  state:{
    name:'curry'
  },
  mutations:{
    //用法同store
    updd(state){
      state.name = 'shuai'
    }
  },
  getters:{
    //多了个rootState
    fullname(state,rootState){
      //rootState:store的所有getters
      console.log(rootState)
      return state.name + rootState.powercounter
    }
  },
  actions:{
    // 这里的context跟store的state一样
    aupda(context){
      console.log(context)
    }
  },
  modules:{
    // modules里面可以包含modules但是不建议这么做，因为会变得臃肿
  }
}


// 1.安装插件
Vue.use(Vuex)

// 2.创建并导出vuex对象  第三步需要在main.js创建vue实例中写入
export default new Vuex.Store({
  state: { 
    /**
     * stage:存放多个组件需要共享的数据，相当于全局的data
     * 如何使用共享数据？this.$store.state.数据
     * 需要注意的是：
     *    不建议使用$store.state.数据=''的方式修改全局数据(虽然可以这么改)
     *    需要修改则利用mutations,这样便于跟踪全局数据修改
     * 单一状态树：简单理解就是如果有多个需要全局共享的数据都放在一个store的state中管理
     *
     */
    counter:100,
    student:[
      {id:1,name:'carry',age:18},
      {id:2,name:'hang',age:16},
      {id:3,name:'hhh',age:23}
    ]
  },
  mutations: {
    /**
     * mutations:相当于定义全局方法
     * (这里的方法都是同步的并且都会默认传state参数，需要我们接收他)
     * 作用：修改全局数据都写在这
     * 其它组件如何对数据进行修改？
     *      this.$store.commit('类型',参数)
     *      类型其实是mutations中对应的方法名
     *      参数成为Payload(负载)
     */
    increment(state,getters){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    increFive(state,f){
      state.counter += f
    },
    increFiveMany(state,c){
      // 传递多个参数时需要传递一个对象
      console.log(c)
      state.counter += c.z+c.x
    },
    update(state,s){
      state.student.push(s)
    }
  },
  actions: {
    /**
     * actions:异步操作的修改的代码必须经过这里写并且需要提交
     *        即仍然在mutations写修改代码，但是要来到actions做提交 
     * 这里的方法都默认传一个context(上下文,有自己的作用域，在这个位置是store对象)
     * 使用：this.$store.dispatch('函数名',参数)
     */
    aUpdate(context,s){
      // setTimeout(() => {
      //   context.commit('update',s)
      // }, 1000);

      console.log(context)

      //高级操作
      new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000);
      }).then(() => {
        context.commit('update',s);
        console.log('添加成功')
      })
    }
  },
  getters:{
    /**
     * getters:类似于计算属性
     * 其他组件如何使用getters的数据？
     *      this.$store.getters.函数名
     */
    powercounter(state){
      return state.counter * state.counter
    },
    stuless20(state,getters){
      //getters里面的函数会传递getters，可以利用他来调用别的getters方法
      console.log(getters.powercounter)
      return state.student.filter(s => s.age<20)
    },
    stumoreparams(state){
      // 当getters需要传递参数时，需利用一个返回函数来接收参数(区别mutations)
      // return function(p){
      //   return state.student.filter(s => s.age>=p)
      // }
      return p => state.student.filter(s => s.age>=18)
    }
  },
  modules: {
    /**
     * modules:包含store模块，防止state过于臃肿，每个store模块的参数跟用法跟store一样
     *    并且modules的模块的state会被加到store的state中，moduls的模块的getters会放在store的getters
          tips：模块中定义的数据名字跟方法名字不要跟store中定义的重复
          使用:除了this.$store.state.模块名.数据需要注意之外其他用法都一样
     */
    // a:{state:{},mustations:{}.....} 跟store一样

    // 常用操作
    a:moduleA
  }
})
