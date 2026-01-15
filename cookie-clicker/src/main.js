import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import StartComponent from './App.vue'

import router from './router'

const app = createApp(StartComponent)

app.use(createPinia())
app.use(router)

app.mount('#app')
