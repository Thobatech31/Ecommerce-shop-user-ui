import axios from "axios";
import { getUserToken} from './helpers/auth'

const BASE_URL = "https://shopping-ecommerce-app.herokuapp.com/api/";
const TOKEN = getUserToken();
export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
})