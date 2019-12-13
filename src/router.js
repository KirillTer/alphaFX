import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main'
import Description from '@/views/Description'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/desc:id',
      component: Description,
      props: true,
    },
  ]
})