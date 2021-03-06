import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import instruce from '@/components/instruce'
import work from '@/components/work'
import example from '@/components/example'
import play from '@/components/play'
import message from '@/components/message'
import contact from '@/components/contact'
import login from '@/components/login.vue'
import manager from '@/components/manager.vue'
import store from '@/components/store/store.js'
Vue.use(Router)

 
 let router = new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/instruce',
      component: instruce
    },
    {
      path: '/work',
      component: work,
    },
    {
      path: '/example',
      component: example
    },
    {
      path: '/play',
      component: play
    },
    {
      path: '/message',
      component: message,
    },
    {
      path: '/contact',
      component: contact
    },
    {
      path: '/login',
      component: login
    },
    {
      path:'/manager',
      component:manager
    }
  ]
})
export default router

