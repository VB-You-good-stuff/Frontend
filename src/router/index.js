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
import w1126 from "../views/VBWork/1126.vue";
import w1203 from "../views/VBWork/1203.vue";
import button from "../views/VBFunction/Button.vue";
import form from "../views/VBFunction/Form.vue";
import label from "../views/VBFunction/Label.vue";
import textbox from "../views/VBFunction/TextBox.vue";
import ifElse from "../views/VBAdvanced/IfElse.vue";
import selectCase from "../views/VBAdvanced/selectCase.vue";
import VBfinal from "../views/VBfinal.vue";
import loop from "../views/VBAdvanced/loop.vue";
import forNext from "../views/VBAdvanced/forNext.vue";
import DoLoop from "../views/VBAdvanced/doLoop.vue";
import array from "../views/VBAdvanced/array.vue";
import nestedLoop from "../views/VBAdvanced/nestedLoop.vue";
import sort from "../views/VBAdvanced/sort.vue";
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
        path: "/VBfinal",
        name: "VBfinal",
        component: VBfinal,
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
        path: "/VBHomework/hw1126",
        name: "Homework1126",
        component: w1126,
      },
      {
        path: "/VBHomework/hw1203",
        name: "Homework1203",
        component: w1203,
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
      },
      {
        path: "/VBFunction/TextBox",
        name: "TextBox",
        component: textbox,
      },
      {
        path: "/VBAdvanced/if-Else",
        name: "ifElse",
        component: ifElse,
      },
      {
        path: "/VBAdvanced/select case",
        name: "selectCase",
        component: selectCase,
      },
      {
        path: "/VBAdvanced/Loop",
        name: "loop",
        component: loop,
      },
      {
        path: "/VBAdvanced/ForNext",
        name: "forNext",
        component: forNext,
      },
      {
        path: "/VBAdvanced/DoLoop",
        name: "DoLoop",
        component: DoLoop,
      },
      {
        path: "/VBAdvanced/Array",
        name: "Array",
        component: array,
      },
      {
        path: "/VBAdvanced/NestedLoop",
        name: "NestedLoop",
        component: nestedLoop,
      },
      {
        path: "/VBAdvanced/Sort",
        name: "Sort",
        component: sort,
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
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // },
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    return { x: 0, y: 0 }; // Go to the top of the page if no hash
  },
});

export default router;
