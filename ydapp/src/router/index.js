import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/topic/topic'
import Details from '@/components/details/details'
import Login from '@/components/login/logindl'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/topic/:tab',
      component: homePage
    },
    {
      path: '/topic/:tab/:id',
      component: Details
    },
    {
      path: '/login/:all',
      component: Login
    },
    {
      path: '/user/:name',
      component: User
    },
    {
      path: '/*',
      redirect: '/topic/all'
    }
  ]
})
