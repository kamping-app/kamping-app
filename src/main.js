import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

// * Axios default settings
Axios.defaults.baseURL = process.env.VUE_APP_API_URL
Axios.defaults.headers.common['Authorization'] = `bearer ${
  process.env.VUE_APP_API_TOKEN
}`

// Vue Layouts
import Blank from './layouts/Blank'
import Default from './layouts/Default'

Vue.component('blank-layout', Blank)
Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
