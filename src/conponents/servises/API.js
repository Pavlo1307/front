import axios from 'axios';

let options = {
    baseURL:'http://localhost:5000/'
};

let axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
const getUser = (id) => axiosInstance('/users/'+ id);
const registrationUser = (data) => axiosInstance.post('/users', data);
const loginUser = (data) => axiosInstance.post('/login', data)


export {getUsers, registrationUser, loginUser, getUser }
