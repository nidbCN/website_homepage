import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import('./components/Home'),
    },
    {
        path: "/about",
        name: "About",
        component: () => import('./components/About'),
    },
    {
        path: "/friends",
        name: "Friends"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;