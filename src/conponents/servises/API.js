import axios from 'axios';

let options = {
    baseURL:'http://localhost:5000/'
};

let axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
const registrationUser = (data) => axiosInstance.post('/users', data);


export {getUsers, registrationUser }
