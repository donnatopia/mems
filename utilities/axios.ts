import axios from 'axios';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3005;

const URL = `http://${HOST}:${PORT}`;

const get = (endpoint: string, data?: object) => axios.get(URL + endpoint, data);
const post = (endpoint: string, data: object) => axios.post(URL + endpoint, data);
const del = (endpoint: string, data: object) => axios.delete(URL + endpoint, data);
const put = (endpoint: string, data: object) => axios.delete(URL + endpoint, data);

export { get, post, del, put };