import { createRouter, createWebHashHistory } from "vue-router";
import webLayout from "@/views/web/layout.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // hash #
  routes: [
    {
      path: "/",
      name: "web-layout",
      component: webLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/web/pages/home.vue")
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/web/pages/about.vue")
        },
        {
          path: "/firebase",
          name: "firebase",
          component: () => import("@/views/web/pages/firebase.vue")
        },
      ]
    },
    // ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    {
      path: "/bgm-login",
      name: "bgm-login",
      component: () => import("@/views/bgm/login.vue"),
    },
    {
      path: "/bgm",
      name: "bgm-layout",
      component: () => import("@/views/bgm/layout.vue"),
      children: [
        {
          path: "/bgm/member",
          name: "bgm-member",
          component: () => import("@/views/bgm/pages/member.vue")
        },
        {
          path: "/bgm/member/:id",
          name: "bgm-member-info",
          component: () => import("@/views/bgm/pages/member/[id].vue")
        },
        {
          path: "/bgm/staff",
          name: "bgm-staff",
          component: () => import("@/views/bgm/pages/staff.vue")
        },
      ]
    },
    // ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
    {
      path: "/:pathMatch(.*)",
      name: "NotFound",
      component: () => import("@/views/no-page.vue")
    }
  ]
});

export default router;
