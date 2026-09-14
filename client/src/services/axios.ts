import axios from "axios";
import { BASE_URL, BASE_URL_DEVELOP } from "../../env";

const api = axios.create({
    baseURL: BASE_URL_DEVELOP,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})

export default api