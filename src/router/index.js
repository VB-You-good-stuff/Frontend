import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import logIn from "../views/pages/LogIn.vue";
import register from "../views/pages/register.vue";
import VBQandA from "../views/VBQandA/VBQandA.vue";
import VBInstall from "../views/VBInstall/VBInstall.vue";
import VBStart from "../views/VBStart/VBStart.vue";
import VBFuncIntro from "../views/VBStart/VBFuncIntro.vue";
import Layout from "../layouts/Layout.vue";
import forum_index from "../views/forum/index.vue";
import article from "../views/forum/article.vue";
import article_create from "../views/forum/create.vue";
import define from "../views/VBBasic/define.vue";
import dataType from "../views/VBBasic/dataType.vue";
import operator from "../views/VBBasic/operator.vue";
import debug from "../views/VBBasic/debug.vue";
import pratice from "../views/VBBasic/pratice.vue";
import home from "../views/pages/home.vue";
import VBFirstWork from "../views/VBBasic/firstWork.vue";
import testingSkill from "../views/VBBasic/testSkill.vue";
import breakpoint from "../views/VBBasic/breakpoint.vue";
import Zip from "../views/VBStart/Zip.vue";
import w1015 from "../views/VBWork/1015.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/VBInstall",
        name: "VBInstall",
        component: VBInstall,
      },
      {
        path: "/VBFirstWork",
        name: "VBFirstWork",
        component: VBFirstWork,
      },
      {
        path: "/VBStart",
        name: "VBStart",
        component: VBStart,
      },
      {
        path: "/VBFuncIntro",
        name: "VBFuncIntro",
        component: VBFuncIntro,
      },
      {
        path: "/VBQA",
        name: "VBQA",
        component: VBQandA,
      },
      {
        path: "/forum",
        name: "forum",
        component: forum_index,
      },
      {
        path: "/forum/article/:id",
        name: "article",
        component: article,
      },
      {
        path: "/forum/create",
        name: "article_create",
        component: article_create,
      },

      {
        path: "/VBBasic/define",
        name: "define",
        component: define,
      },
      {
        path: "/VBBasic/dataType",
        name: "dataType",
        component: dataType,
      },
      {
        path: "/VBBasic/operator",
        name: "operator",
        component: operator,
      },
      {
        path: "/VBBasic/debug",
        name: "debug",
        component: debug,
      },
      {
        path: "/VBBasic/pratice",
        name: "pratice",
        component: pratice,
      },
      {
        path: "/VBBasic/testingSkill",
        name: "testingSkill",
        component: testingSkill,
      },
      {
        path: "/VBBasic/breakpoint",
        name: "breakpoint",
        component: breakpoint,
      },
      {
        path: "/VBSave",
        name: "Zip",
        component: Zip,
      },
      {
        path: "/VBHomework/1015",
        name: "Homework1015",
        component: w1015,
      },
    ],
  },
  {
    path: "/home",
    name: "/home",
    component: home,
  },

  {
    path: "/logIn",
    name: "logIn",
    component: logIn,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
