import { store } from "@/store/store.js"
export function setInterceptors(instance) {
	instance.interceptors.request.use(
		function (config) {
			if (store.state.accessToken !== "") config.headers.token = store.state.accessToken
			return config
		},
		function (error) {
			return Promise.reject(error)
		}
	)

	instance.interceptors.response.use(
		function (response) {
			return response
		},
		function (error) {
			return Promise.reject(error)
		}
	)
	return instance
}
