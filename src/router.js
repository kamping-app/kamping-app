import Vue from 'vue'
import Router from 'vue-router'

// * Pages
import Home from '@/components/pages/Home'
import PageNotFound404 from '@/components/pages/PageNotFound404'
import Cities from '@/components/pages/Cities'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cities/:city_slug/:city_id',
      name: 'city',
      component: Cities,
      props: true
    },
    {
      path: '/*',
      name: '404',
      component: PageNotFound404
    }
  ]
})
