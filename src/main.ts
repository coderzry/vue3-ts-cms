import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import HYRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 注册element-plus
app.use(globalRegister)
app.use(ElementPlus)
app.use(store)
setupStore()
app.use(router)

app.mount('#app')

// HYRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
