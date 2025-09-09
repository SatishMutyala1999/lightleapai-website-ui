import { createRouter, createWebHistory } from 'vue-router'

import Polaris from '@/views/Polaris.vue';
import Home from '@/views/Home.vue';
import  Orion from '@/views/Orion.vue';
import Prism  from '@/views/Prism.vue';
import Atlas from '@/views/Atlas.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/polaris', name: 'polaris', component: Polaris },
    { path: '/orion', name: 'orion', component: Orion },
    { path: '/prism', name: 'prism', component: Prism },
    { path: '/atlas', name: 'atlas', component: Atlas },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
