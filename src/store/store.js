import Vue from "vue"
import Vuex from "vuex"
import { fetchWorksList } from "@/api/modules/work.js"
import { loginApp } from "@/api/modules/auth.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		introduceName: "Yun<br>HyeWon",
		dashboardWorks: [],
		accessToken: "",
		refreshToken: "",
		userInfo: {},
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
			window.scrollTo(0, offsetTop)
		},
		setWorks(state, works) {
			state.dashboardWorks = works
		},
		setLoginData(state, loginData) {
			state.accessToken = loginData.accessToken
			state.refreshToken = loginData.refreshToken
			state.userInfo = loginData.userInfo
		},
	},
	actions: {
		async fetchWorks(state, payload) {
			const { data } = await fetchWorksList(payload)
			this.commit("setWorks", data)
		},
		async login(state, payload) {
			const { data } = await loginApp(payload)
			this.commit("setLoginData", data)
		},
	},
})
