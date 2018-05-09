import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import instruce from '@/components/instruce'
import work from '@/components/work'
import example from '@/components/example'
import play from '@/components/play'
import message from '@/components/message'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
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
      component: work
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
      component: message
    },
    {
      path: '/contact',
      component: contact
    },
  ]
})
