import axios from 'axios';
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token";
const url = "http://localhost:4000";

export const login = async(data = {}) => {
    try {
        const res = await axios.post(`${url}/api/login`, data);
        console.log(res.data);
        return res.data
    } catch (error) {
        return error
    }
}