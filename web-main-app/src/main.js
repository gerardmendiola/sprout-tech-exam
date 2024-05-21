import Vue, { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App).mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)
// createApp(App).mount('#app')
