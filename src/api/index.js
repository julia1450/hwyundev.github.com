import axios from "axios"
import { setInterceptors } from "./common/interceptors"

const config = {
	baseUrl: process.env.NODE_ENV === "production" ? "https://hyevlog-app-for-express.herokuapp.com/" : "http://localhost:3000/",
}
function createInstance() {
	const axiosInstance = axios.create({
		baseURL: config.baseUrl,
	})
	return setInterceptors(axiosInstance)
}

const axiosInstance = createInstance()

export { axiosInstance }
