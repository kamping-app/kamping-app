import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import { createI18n } from './i18n'

// * Axios default settings
Axios.defaults.baseURL = process.env.VUE_APP_API_URL
Axios.defaults.headers.common['Authorization'] = `bearer ${
  process.env.VUE_APP_API_TOKEN
}`

Vue.config.productionTip = false

const i18n = createI18n()

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
