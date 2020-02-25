<template>
  <div>
    <h2>{{this.$store.state.counter}}</h2>
    我是getters的内容：{{$store.getters.powercounter}}
    <br>
    年龄小于20的学生有：{{$store.getters.stuless20}}
    <br>
    年龄大于18的学生有(传递参数):{{$store.getters.stumoreparams(18)}}
    <br>
    <button @click="vUpdate">添加学生</button>
  </div>
</template>

<script>
export default {
  methods:{
    vUpdate(){
      const s = {id:4,name:'haha',age:30}
      this.$store.dispatch('aUpdate',s)
      this.$store.dispatch('aupda',s) //modules的actions
    }
  }
}
</script>

<style>

</style>