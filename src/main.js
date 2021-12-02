import "./assets/css/reset.css"
import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import { store } from "./store/store"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(fas, far, fab)

Vue.use(router)
Vue.config.productionTip = false

Vue.component("font-awesome-icon", FontAwesomeIcon)

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount("#app")
