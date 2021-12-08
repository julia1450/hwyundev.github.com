import { axiosInstance } from "../index"

function loginApp(userInfo) {
	return axiosInstance.get("login", {
		params: { ...userInfo },
	})
}

export { loginApp }
