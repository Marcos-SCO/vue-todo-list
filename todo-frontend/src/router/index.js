import { createRouter, createWebHistory } from "vue-router";

import App from '../App.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: App,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;