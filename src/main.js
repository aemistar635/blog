import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import Toaster from '@meforma/vue-toaster';
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Editor from "primevue/editor";
//import app scss
import './assets/app.css'

createApp(App).use(store).use(PrimeVue).use(router).use(Toaster,{position: 'top-right', duration:1000}).component('Editor', Editor).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
