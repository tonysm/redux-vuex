import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Single from '@/components/Single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/posts/:id',
      name: 'Single',
      component: Single
    }
  ]
})
