import axios from 'axios';
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Origin, Content-Type, X-Auth-Token";
const url = "http://localhost:4000";

export const getAllEvents = async() => {
    try {
        const res = await axios.get(`${url}/api/event/all`);
        return res.data
    } catch (error) {
        return error
    }
};

export const getEventsSuscribed = async(userId) => {
    try {
        const res = await axios.get(`${url}/api/event/suscribe/${userId}'`);
        return res.data
    } catch (error) {
        return error
    }
};