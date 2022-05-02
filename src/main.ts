import { createApp } from 'vue'

// import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import './service/axios.demo'
import HYRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus
// app.use(globalRegister)
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')

HYRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
