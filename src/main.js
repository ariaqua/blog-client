import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/index.scss'
import '@/styles/modest.scss'

import * as directives from '@/directives/index'

const app = createApp(App)

Object.keys(directives).forEach(key => {
  console.log(directives)
  app.directive(key, directives[key])
})

app.use(router)

app.mount('#app')
