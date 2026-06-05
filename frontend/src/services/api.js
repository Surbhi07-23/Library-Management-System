import axios from "axios";

const api = axios.create({
    baseURL  : "https://library-management-system-njkh.onrender.com/api"
})

export default api;