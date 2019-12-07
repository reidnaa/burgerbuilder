import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-35942.firebaseio.com/'
});

export default instance;