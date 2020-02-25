import Vue from 'vue'
import store from './store'
import App_component from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App_component),
}).$mount('#app') // el:'#app'底层的操作就是mount('#app')


