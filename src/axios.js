import axios from 'axios';

const instance = axios.create({
    baseURL: '### Push your firebase database URL ###'
})

export default instance;