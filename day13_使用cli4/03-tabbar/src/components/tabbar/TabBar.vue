<template>
  <div id='tab-bar'>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #tab-bar{
    display: flex;
    background-color: #faf4f4fb;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -2px 1px rgba(100, 100, 100, .1);
  }

</style>