import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LogIn from "../views/pages/LogIn.vue";
// import VBQandA from "../views/VBQandA.vue";
import VBInstall from "../views/VBInstall/VBInstall.vue";
import VBStart from "../views/VBStart/VBStart.vue";
import VBFuncIntro from "../views/VBStart/VBFuncIntro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/logIn",
    name: "LogIn",
    component: LogIn,
  },
  // {
  //   path: "/VBQ&A",
  //   name: "VBQ&A",
  //   component: VBQandA,
  // },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
