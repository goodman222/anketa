import { createRouter, createWebHistory } from "vue-router";
import Test from "../components/test.vue";
import HomePageContainer from "@/components/HomePageContainer.vue";
import PersonalPage from "@/components/PersonalPage.vue";
import FamilyPage from "@/components/FamilyPage.vue";
import EducationPage from "@/components/EducationPage.vue";
import ExpPage from "@/components/ExpPage.vue";
import MoreInfoPage from "@/components/MoreInfoPage.vue";
import EndPage from "@/components/EndPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/test", component: Test },
    {
      path: "/",
      component: HomePageContainer,
      props: { currentPage: 0 },
    },
    {
      path: "/page-1",
      component: PersonalPage,
      props: { currentPage: 1 },
    },
    {
      path: "/page-2",
      component: FamilyPage,
      props: { currentPage: 2 },
    },
    {
      path: "/page-3",
      component: EducationPage,
      props: { currentPage: 3 },
    },
    {
      path: "/page-4",
      component: ExpPage,
      props: { currentPage: 4 },
    },
    {
      path: "/page-5",
      component: MoreInfoPage,
      props: { currentPage: 5 },
    },
    {
      path: "/endPage",
      component: EndPage,
    },
  ],
});

export default router;
