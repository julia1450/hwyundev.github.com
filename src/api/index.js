import axios from "axios";

const config = {
    baseUrl: process.env.NODE_ENV === 'production'? 'https://hyevlog-app-for-express.herokuapp.com/' : 'http://localhost:3000/', 
}

function fetchWorksList(start, size) {
    return axios.get(`${config.baseUrl}work`, {
        params: {
            start,
            size
        }
    });
}

export {
    fetchWorksList
}