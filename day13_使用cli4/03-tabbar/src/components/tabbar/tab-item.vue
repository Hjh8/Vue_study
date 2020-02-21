<template>
  <div class='tab-item' @click="itemclick">
    <!-- 在slot外面包装一层div是防止有些样式被替换掉 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{itemActive: isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String
  },
  data(){
    return{
      isActive:false
    }
  },
  methods:{
    itemclick(){
      this.$router.replace(this.path);
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style>
  .tab-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .itemActive{
    color: red;
  }
</style>