import { createWebHistory, createRouter } from "vue-router";
import LoggedOutLandingView from "@/views/LoggedOutLanding.vue";

const routes = [
  {
    path: "/",
    name: "LoggedOutLandingView",
    component: LoggedOutLandingView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
