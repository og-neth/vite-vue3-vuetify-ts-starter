import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

/**
 *
 * @returns lazy loaded component
 * @description: https://router.vuejs.org/guide/advanced/lazy-loading.html
 */
const HomePage = () => import("@/pages/Home.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { routes };

export default router;
