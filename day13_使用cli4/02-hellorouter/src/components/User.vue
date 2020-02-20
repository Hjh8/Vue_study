// params的类型传递参数
<template>
  <div>
    <h2>我是用户</h2>
    <!-- 注意，$router是index.js创建的router对象
    但是这里是$route(没有r)是指当前活跃的路由
    id是 配置路由与组件之间的应用关系时候path中动态绑定的id -->
    <p>{{$route.params.id}}用户</p>
    <!-- 组件间传递参数方式
              一、params的类型  (传递后形成的路径  /uesr/132 )
                  1.配置路由格式：path='/路径/:形参'
                  2.<router-link>传递的方式: :to='/路径/实参'
                  3.再通过{{$route.params.形参}}获取数据
              二、query的类型   (传递后形成的路径  /uesr?id=132 )
                  1.配置路由格式：path='/路径' 即正常配置
                  2.传递的方式:to中传递一个对象，并写好path跟query(key的形式)
                    例： :to='{path:'/user',query:{name:'hang',age:'18'}}'
                  3.再通过{{$route.query.key}}获取数据
     -->

  </div>
</template>

<script>
export default {
  name:'user', // keep-alive中会用到name
  created(){ //切换页面标题
    // document.title = '用户'
    console.log('user组件被激活')
  },
  destroyed(){
    console.log('uesr组件被销毁')
  }
}
</script>

<style>

</style>