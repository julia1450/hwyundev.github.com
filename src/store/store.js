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
			document.body.scrollTo(0, offsetTop)
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
		fetchWorks(state, payload) {
			fetchWorksList(payload).then(response => {
				this.commit("setWorks", response.data)
			})
		},
		login(state, payload) {
			loginApp(payload).then(response => {
				this.commit("setLoginData", response.data)
			})
		},
	},
})
