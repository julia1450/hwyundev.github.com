import { axiosInstance } from "../index"

function fetchWorksList(payload) {
	return axiosInstance.get(`work`, {
		params: {
			...payload,
		},
	})
}

export { fetchWorksList }
