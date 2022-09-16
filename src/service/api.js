import axios from "axios";

const api = axios.create({
    baseURL : "https://consultnew-api.herokuapp.com"
})

export default api;