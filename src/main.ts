import { createApp } from 'vue'

import { globalRegister } from './global'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')
