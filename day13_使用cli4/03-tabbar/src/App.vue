<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
      <tab_item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tab_item>
      <tab_item path='/category'>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tab_item>
      <tab_item path='/cart'>
        <img slot="item-icon" src="./assets/img/tabbar/cart.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/cart_active.svg">
        <div slot="item-text">购物车</div>
      </tab_item>
      <tab_item path='/profile'>
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tab_item>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import tab_item from './components/tabbar/tab-item'

export default {
  components:{
    TabBar,
    tab_item
  }
}
</script>
 
<style>
  @import url(./assets/css/base.css); 
  
</style>
