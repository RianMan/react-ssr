import axios from 'axios';
export default isServer => axios.create({
    baseURL: isServer ? 'http://localhost:9000/api' : 'http://localhost:3000/api',
})

