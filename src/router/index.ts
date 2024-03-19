import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import index from "../views/index/index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/index",
        name: 'index',
        meta: {
            title: '首页'
        },
        component: () => import("../views/index/index.vue"),
    },
    {
        path:"/",
        name:'transitionalInformation',
        meta: {
            title: '首页'
        },
        component: () => import("../views/index/transitionalInformation.vue"),
    },
    {
        path:"/dispatch",
        name:'dispatcherPage',
        meta: {
            title: '派发器'
        },
        component: () => import("../views/index/dispatcherPage.vue"),
    }
];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
