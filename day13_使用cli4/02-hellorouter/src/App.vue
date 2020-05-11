<template>
  <div id="app">
    <!-- 
      <router-link>:该标签是一个vue-router中已经内置的组件，他会默然被渲染成a标签
          属性：
            to='',用于指定跳转的路径
            tag='',指定<router-link>被渲染成什么组件(默认a)
            replace,让网页的返回按钮失效
                内部修改url的方式是pushStage()
                现在是replace
      <router-view></router-view>：该标签会根据当前的路径，动态渲染出不同的组件
          在路由切换时切换的就是此标签挂载的组件 
    -->
    <!-- 利用标签跳转router -->
    <!-- <router-link to="/home" tag='button' replace>首页</router-link>
    <br>
    <router-link to="/chat" tag='button' replace>聊天</router-link>
    <router-view></router-view>   -->

    <!-- 使用代码跳转router -->
    <!-- <button @click="homeclick">首页</button>
    <button @click="chatclick">聊天</button>
    <router-view></router-view> -->

    <router-link to="/home" tag='button' replace>首页</router-link> 
    <br>
    <router-link to="/chat" tag='button' replace>聊天</router-link> 
    <br>
    <!-- 动态路由的使用  结合v-bind -->
    <router-link :to="'/user/'+userID" tag='button'>用户</router-link>
    <br>
    <router-link :to="{path:'/profile',query:{name:'hang',age:18}}" tag='button'>档案</router-link> 

    <keep-alive exclude="profile,user">
      <!-- 进行缓存，保持里面的东西处于活跃状态，不被销毁
              属性：
                include='字符串或正则表达式':只有匹配的组件会被缓存，匹配多个时用,分割
                exclude='字符串或正则表达式':任意匹配的组件都不会被缓存，匹配多个时用,分割
       -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userID:152
    }
  },
  methods:{
    homeclick(){
      //因为router在每个组件都定义了$router属性
      // this.$router.push('/home')
      this.$router.replace('/home')
      // this.$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)
      // this.$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
      // this.$router.back(): 请求(返回)上一个记录路由
    },
    chatclick(){
      // this.$router.push('/chat')
      this.$router.replace('/chat')
    }
  }
}
</script>

<style>

</style>
