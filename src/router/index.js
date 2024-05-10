import { createRouter, createWebHistory } from "vue-router";
import Test from "../components/test.vue";
import HomePageContainer from "@/components/HomePageContainer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/test", component: Test },
    {
      path: "/",
      component: HomePageContainer,
    },
  ],
});

export default router;
