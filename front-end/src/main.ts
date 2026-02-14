import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


// Theme CSS
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import 'primeicons/primeicons.css'
import { Button, InputText } from 'primevue'
import { createPinia } from 'pinia'



const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.component('InputText',InputText)
app.use(createPinia())
app.use(router);
app.component('Button', Button)
app.mount('#app');
