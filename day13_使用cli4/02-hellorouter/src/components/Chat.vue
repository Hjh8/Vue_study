<template>
  <div>
    <h2>我是聊天</h2>
    <p>建杭很帅</p>
  </div>
</template>

<script>
export default {
  created(){ //切换页面标题
    // document.title = '聊天'
    console.log('chat组件被激活')
  },
  destroyed(){
    console.log('chat组件被销毁')
  }
}
</script>

<style>

</style>