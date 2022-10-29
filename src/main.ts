import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router/index'
import App from './App.vue'


const app = createApp(App)

app.use(router).use(createPinia()).mount('#app')