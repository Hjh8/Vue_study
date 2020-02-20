// 二、query的类型传递参数
<template>
  <div>
    <h2>我是profile组件</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
export default {
  name:'profile', // keep-alive中会用到name
  created(){ //切换页面标题
    // document.title = '档案'
    console.log('profile组件被激活')
  },
  destroyed(){
    console.log('profile组件被销毁')
  }
  
}
</script>

<style>

</style>