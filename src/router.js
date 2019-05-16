import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import City from './views/City.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'blank' },
      component: Home
    },
    {
      path: '/cities/:city_slug/:city_id',
      name: 'city',
      component: City,
      meta: { layout: 'default' },
      props: true
    },
    {
      path: '/*',
      name: '404',
      component: () => import('./views/404.vue')
    }
  ]
})
