import axios from "axios"

const config = {
	baseUrl: process.env.NODE_ENV === "production" ? "https://hyevlog-app-for-express.herokuapp.com/" : "http://localhost:3000/",
}

function fetchWorksList(payload) {
	return axios.get(`${config.baseUrl}work`, {
		params: {
			...payload,
		},
	})
}

export { fetchWorksList }
