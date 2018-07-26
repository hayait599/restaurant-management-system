import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restaurant-management-sy-8f752.firebaseio.com/'
});


export default instance;