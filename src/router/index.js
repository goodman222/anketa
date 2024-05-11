import { createRouter, createWebHistory } from "vue-router";
import Test from "../components/test.vue";
import HomePageContainer from "@/components/HomePageContainer.vue";
import PersonalPage from "@/components/PersonalPage.vue";
import FamilyPage from "@/components/FamilyPage.vue";
import EducationPage from "@/components/EducationPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/test", component: Test },
    {
      path: "/",
      component: HomePageContainer,
    },
    {
      path: "/page-1",
      component: PersonalPage,
    },
    {
      path: "/page-2",
      component: FamilyPage,
    },
    {
      path: "/page-3",
      component: EducationPage,
    },
  ],
});

export default router;
