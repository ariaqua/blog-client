import axios from 'axios'

const url = process.env.NODE_ENV === 'production'
  ? 'https://api.vaqua.top/blog'
  : '/blog'

const service = axios.create({
  baseURL: url,
  timeout: 5000
})

service.interceptors.response.use(
  response => {
    // console.log(response)
    const res = response.data
    if (res.statusCode !== 200 && res.statusCode !== 201) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error.message)
    // router.replace('/error')
    return Promise.reject(error)
  }
)

export default service
