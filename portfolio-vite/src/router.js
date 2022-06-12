import {createRouter, createWebHistory}  from 'vue-router'

// routes components
import Home from './pages/Home.vue'

const routes = [
    {
        path: '/home',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
  