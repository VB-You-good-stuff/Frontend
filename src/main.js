import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import vuetify from "./plugins/vuetify";

import axios from "axios";
import VueAxios from 'vue-axios'

import store from "./store";
import { sync } from "vuex-router-sync";
import Header from "@/layouts/Header";
import SideBar from "@/layouts/SideBar";

import "sweetalert2/dist/sweetalert2.min.css";
import "notyf/notyf.min.css";
import "notyf";
//import "bootstrap/dist/css/bootstrap.min.css" 

Vue.use(VueAxios,axios)

Vue.config.productionTip = false;

Vue.component("Header", Header);
Vue.component("SideBar", SideBar);

sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
