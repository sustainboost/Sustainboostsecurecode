import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Update with your Laravel API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
