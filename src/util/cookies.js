function saveAuthToCookie(value) {
	document.cookie = `til_auth=${JSON.stringify(value)}`
}

function saveUserToCookie(value) {
	document.cookie = `til_user=${JSON.stringify(value)}`
}

function getAuthFromCookie() {
	const value = document.cookie
		.split("; ")
		.find(row => row.startsWith("til_auth"))
		.split("=")[1]
	try {
		if (value) return JSON.parse(value)
	} catch (e) {
		return ""
	}
}

function getUserFromCookie() {
	const value = document.cookie
		.split("; ")
		.find(row => row.startsWith("til_user"))
		.split("=")[1]
	try {
		if (value) return JSON.parse(value)
	} catch (e) {
		return ""
	}
}

export { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie }
