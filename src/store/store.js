import Vue from "vue"
import Vuex from "vuex"
import { fetchWorksList } from "@/api/modules/work.js"
import { loginApp } from "@/api/modules/auth.js"
import { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie, deleteCookieByName } from "@/util/cookies.js"

Vue.use(Vuex)
const storeConfig = {
	state: {
		introduceName: "Yun<br>HyeWon",
		dashboardWorks: [],
		accessToken: getAuthFromCookie().accessToken || "",
		refreshToken: getAuthFromCookie().refreshToken || "",
		userInfo: getUserFromCookie() || "",
		isLogin: getUserFromCookie().userId != null,
	},
	getters: {
		getIntroduceName(state) {
			return state.introduceName
		},
		getDashboardWorks(state) {
			return state.dashboardWorks
		},
		getIsLogin(state) {
			return state.isLogin
		},
		getUserInfo(state) {
			return state.userInfo
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
			saveAuthToCookie({ accessToken: state.accessToken, refreshToken: state.refreshToken })
			saveUserToCookie(state.userInfo)
		},
		logout(state) {
			state.accessToken = ""
			state.refreshToken = ""
			state.userInfo = ""
			deleteCookieByName("til_auth")
			deleteCookieByName("til_user")
		},
	},
	actions: {
		async fetchWorks({ commit }, payload) {
			const { data } = await fetchWorksList(payload)
			commit("setWorks", data)
		},
		async login({ commit }, payload) {
			const { data } = await loginApp(payload)
			commit("setLoginData", data)
		},
	},
}

const store = new Vuex.Store(storeConfig)

export { storeConfig, store }
