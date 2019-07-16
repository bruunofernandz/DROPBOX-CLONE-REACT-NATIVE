import axios from 'axios';

const api = axios.create({
    baseURL: 'https://uploadstack-backend.herokuapp.com'
});

export default api;