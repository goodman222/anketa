import { createRouter, createWebHistory } from "vue-router";
import Test from "../components/test.vue";
import HomePageContainer from "@/components/HomePageContainer.vue";
import PersonalPage from "@/components/PersonalPage.vue";
import FamilyPage from "@/components/FamilyPage.vue";
import EducationPage from "@/components/EducationPage.vue";
import ExpPage from "@/components/ExpPage.vue";
import MoreInfoPage from "@/components/MoreInfoPage.vue";

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
    {
      path: "/page-4",
      component: ExpPage,
    },
    {
      path: "/page-5",
      component: MoreInfoPage,
    },
  ],
});

export default router;
