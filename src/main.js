import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/index.scss'
import '@/styles/modest.scss'

import toast from '@/util/toast'

import * as directives from '@/directives/index'

const app = createApp(App)

app.config.globalProperties.$toast = toast

Object.keys(directives).forEach(key => {
  app.directive(key, directives[key])
})

app.use(router)

app.mount('#app')
