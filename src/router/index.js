import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/issues/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/issues',
      name: 'Hello',
      component: Hello
    }
  ]
})
