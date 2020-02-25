<template>
  <div id="app">
    <h2>======以下是app组件的内容======</h2>
    {{message}}<br>
    {{this.$store.state.counter}}
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addFive(5)">+5</button><br>
    我是getters的内容：{{$store.getters.powercounter}}
    <br>
    
    <h2>======以下是ddd组件的内容======</h2>
    <ddd/>

    <h2>=======以下是modules的内容=======</h2>
    <h2>{{this.$store.state.a.name}}</h2>
    <h2>{{this.$store.getters.fullname}}</h2>
  </div>
</template>

<script>
import ddd from './components/ddd.vue'

export default {
  data(){
    return{
      message:'啊杭是帅逼'
    }
  },
  components:{
    ddd
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addFive(f){
      this.$store.commit('increFive',f)
    },
    addFiveMany(){
      const c ={z:5,x:5}
      this.$store.commit('increFiveMany',c)
    }
  }
}
</script>

<style>

</style>