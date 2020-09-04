import axios from 'axios';
export default isServer => axios.create({
    baseURL: 'http://localhost:9000/api',
})

