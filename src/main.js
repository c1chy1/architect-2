import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueLazyLoad from 'vue3-lazyload'
import './assets/tailwind.css'



createApp(App).use(router).use(VueLazyLoad).mount('#app')

