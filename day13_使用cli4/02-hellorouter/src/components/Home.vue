<template>
  <div>
    <h2>我是主页</h2>
    <p>建杭很帅</p>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created(){ //切换页面标题
    // document.title = '主页'
    console.log('home组件被激活')
  }
  ,
  destroyed(){
    console.log('home组件被销毁')
  }
}
</script>

<style>

</style>