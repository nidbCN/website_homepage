import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./components/Home'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./components/About'),
    },
    {
        path: '/friends',
        name: 'Friends',
        component: () => import('./components/Friends'),
    },
    {
        path: '/error',
        name: 'Error',
        component: () => import('./components/Error'),
    },
    {
        path: '*',
        name: 'NotFound',
        redirect: '/error?code=404',
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;