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
import article_edit from "../views/forum/edit_article.vue";
import content_edit from "../views/forum/edit_content.vue";
import define from "../views/VBBasic/define.vue";
import dataType from "../views/VBBasic/dataType.vue";
import operator from "../views/VBBasic/operator.vue";
import debug from "../views/VBBasic/debug.vue";
import pratice from "../views/VBBasic/pratice.vue";
import home from "../views/pages/home.vue";
import VBFirstWork from "../views/VBStart/firstWork.vue";
import testingSkill from "../views/VBBasic/testSkill.vue";
import breakpoint from "../views/VBBasic/breakpoint.vue";
import Zip from "../views/VBStart/Zip.vue";
import w1015 from "../views/VBWork/1015.vue";
import w1022 from "../views/VBWork/1022.vue";
import w1029 from "../views/VBWork/1029.vue";
import w1105 from "../views/VBWork/1105.vue";
import button from "../views/VBFunction/Button.vue";
import form from "../views/VBFunction/Form.vue";
import label from "../views/VBFunction/Label.vue";
import textbox from "../views/VBFunction/TextBox.vue";
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
        path: "/forum/article_edit/:id",
        name: "article_edit",
        component: article_edit,
      },
      {
        path: "/forum/content_edit/:id",
        name: "content_edit",
        component: content_edit,
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
        path: "/VBHomework/hw1015",
        name: "Homework1015",
        component: w1015,
      },
      {
        path: "/VBHomework/hw1022",
        name: "Homework1022",
        component: w1022,
      },
      {
        path: "/VBHomework/hw1029",
        name: "Homework1029",
        component: w1029,
      },
      {
        path: "/VBHomework/hw1105",
        name: "Homework1105",
        component: w1105,
      },
      {
        path: "/VBFunction/Button",
        name: "Button",
        component: button,
      },
      {
        path: "/VBFunction/Form",
        name: "Form",
        component: form,
      },
      {
        path: "/VBFunction/Label",
        name: "Label",
        component: label,
      },{
        path: "/VBFunction/TextBox",
        name: "TextBox",
        component: textbox,
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
