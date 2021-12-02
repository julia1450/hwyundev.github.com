import Vue from "vue"
import Vuex from "vuex"
import { fetchWorksList } from "@/api/index.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		introduceName: "Yun HyeWon",
		dashboardWorks: [],
	},
	getters: {
		getIntroduceName(state) {
			return state.introduceName
		},
		getDashboardWorks(state) {
			return state.dashboardWorks
		},
	},
	mutations: {
		scrollPage(state, sectionName) {
			let offsetTop = document.getElementById(sectionName).offsetTop - 60
			document.body.scrollTo(0, offsetTop)
		},
		setWorks(state, works) {
			state.dashboardWorks = works
		},
	},
	actions: {
		fetchWorks(state, payload) {
			fetchWorksList(payload).then(response => {
				this.commit("setWorks", response.data)
			})
		},
	},
})
