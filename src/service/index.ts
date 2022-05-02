import HYRequest from './request'
import { BASE_URL } from './request/config' //引入BASE_URL
import localCache from '@/utils/cache'

const HyRequest = new HYRequest({
  baseURL: BASE_URL,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功地拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败地拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应成功地拦截')

      return res.data
    },
    responseInterceptorCatch: (err) => {
      // console.log('响应失败地拦截')
      return err
    }
  }
})

export default HyRequest
