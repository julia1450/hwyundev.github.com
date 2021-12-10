import { axiosInstance } from "../index"

function loginApp(userInfo) {
	return axiosInstance.post("login", {
		...userInfo,
	})
}

export { loginApp }
