import axios from 'axios';

let options = {
    baseURL:'http://localhost:5000/'
};

let axiosInstance = axios.create(options);

const getUsers = () => axiosInstance('/users');
const registrationUser = (data) => axiosInstance.post('/users', data);
const updateUserById = (user_id, data) => axiosInstance.put(`/users/${user_id}`, data);
const deleteUserById = (user_id) => axiosInstance.delete(`/users/${user_id}`);

export {
    getUsers,
    registrationUser,
    updateUserById,
    deleteUserById
}
