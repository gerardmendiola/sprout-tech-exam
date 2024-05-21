import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './components/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        }
    ]
})

createApp(App).use(router).mount('#app')
// app.component('font-awesome-icon', FontAwesomeIcon)