import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login/index.vue'
import home from './components/home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})