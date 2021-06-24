import './assets/css/reset.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(router)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
