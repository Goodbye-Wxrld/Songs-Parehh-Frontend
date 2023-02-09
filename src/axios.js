import axios from 'axios';


const config = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
  })

config.interceptors.response.use(
  response => response.data,
  error => {
    const err = error?.response?.data?.err
    return Promise.reject(err ? err : error.messge)
  }
)
export default config