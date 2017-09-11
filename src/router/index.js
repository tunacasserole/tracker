import Vue from 'vue'
import Router from 'vue-router'
import IssuesList from '@/views/issues/List'
// import IssuesNew from '@/views/issues/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: IssuesList
    }
    // {
    //   path: '/issues',
    //   name: 'IssuesList',
    //   component: IssuesList
    // },
    // {
    //   path: '/issues/new',
    //   name: 'IssuesNew',
    //   component: IssuesNew
    // }
  ]
})
