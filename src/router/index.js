import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import logIn from "../views/pages/LogIn.vue";
import VBQandA from "../views/VBQandA/VBQandA.vue";
import VBInstall from "../views/VBInstall/VBInstall.vue";
import VBStart from "../views/VBStart/VBStart.vue";
import VBFuncIntro from "../views/VBStart/VBFuncIntro.vue";
import Layout from "../layouts/Layout.vue";
import forum_index from "../views/forum/index.vue";
import article from "../views/forum/article.vue";
import define from "../views/VBBasic/define.vue";
import dataType from "../views/VBBasic/dataType.vue";
import operator from "../views/VBBasic/operator.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/VBInstall",
        name: "VBInstall",
        component: VBInstall,
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
        path: "/VBQ&A",
        name: "VBQ&A",
        component: VBQandA,
      },
      {
        path: "/forum",
        name: "forum",
        component: forum_index,
      },
      {
        path: "/article",
        name: "article",
        component: article,
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
    ],
  },
  {
    path: "/logIn",
    name: "logIn",
    component: logIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
