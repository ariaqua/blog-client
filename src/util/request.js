import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.statusCode !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error.message)
    return Promise.reject(error)
  }
)

export default service
