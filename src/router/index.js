import { createRouter, createWebHistory } from 'vue-router'

import Polaris from '../views/Polaris.vue';
import Home from '../views/Home.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/polaris', name: 'Polaris', component: Polaris },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
