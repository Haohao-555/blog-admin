import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from '@/utils/auth'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true
})

// 请求接口拦截
service.interceptors.request.use(
  config => {
    if (store.getters.isLogin) { // 已登录
      if (isCheckTimeout()) {
        ElMessage.warn('登录超时')
        // TODO: 强制退出登录
        store.dispatch('user/logout')
        // return Promise.reject(new Error('token 失效'))
      }
    }
    return config
  }
)

// 响应拦截器
service.interceptors.response.use(response => {
  const { errno, message } = response.data
  if (errno === 4001) { // 未登录
    ElMessage.error(message)
    router.push('/login')
  }
  return response.data
}, error => {
  console.log(error)
  ElMessage.error('服务器发送错误')
})
export default service
