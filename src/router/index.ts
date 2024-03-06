import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import index from "../views/index/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import("../views/index/index.vue"),
    },
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
