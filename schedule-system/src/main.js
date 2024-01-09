import { createApp } from 'vue'

import App from './App.vue'
import route from "./router/router.js";
import pinia from "./pinia.js";


let app = createApp(App)
app.use(route)
app.use(pinia)
app.mount('#app')
