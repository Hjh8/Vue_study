import Vue from 'vue'
// 导入router
import VueRouter from 'vue-router'
// 直接载入组件
// import home from '../components/Home'
// import chat from '../components/Chat'
// import user from '../components/User'
// 懒加载组件
const home = () => import('../components/Home')
const news = () => import('../components/HomeNews')
const message = () => import('../components/HomeMessage')
const chat = () => import('../components/Chat')
const user = () => import('../components/User')
const profile = () => import('../components/Profile')


// 通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 配置路由与组件之间的应用关系
const routes = [
  { //设置默认路径
    path:'',
    redirect:'home' //重定向到home
  },
  {
    path:'/home',
    component:home,
    meta:{
      //meta元数据(描述数据的数据)
      title:'主页'
    },
    children:[  //路由的嵌套使用
      {
        path:'',
        redirect:'news'
      },
      {
        path:'/home/news',
        component:news
      },
      {
        path:'/home/message',
        component:message
      }
    ]
  },
  {
    path:'/chat',
    component:chat,
    meta:{
      title:'聊天'
    },
  },
  {
    path:'/user/:id',
    component:user,
    meta:{
      title:'用户'
    },
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      title:'档案'
    },
  }
]

// 创建Router对象
const router = new VueRouter({
  //默认是url的hash值的修改
  mode: 'history', 
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫 路由跳转前回调
router.beforeEach((to, from, next) =>{
  // to,from 都是源码中都是route
  // 从from跳转到to
  // 动态改标题
  document.title = to.matched[0].meta.title;
  next(); // 调用该方法后才能进入下一个钩子
})

// 全局后置钩子 路由跳转后回调  不需要调用next()函数
router.afterEach((to,from) => {

})
//导出路由
export default router
