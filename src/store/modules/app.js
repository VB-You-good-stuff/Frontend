import { make } from "vuex-pathify";
const state = {
  mini: false,
  drawer: null,
};
const mutations = {
  changeMini(state) {
    state.mini = !state.mini;
  },
};
const actions = {
  ...make.actions(state),
};
const getters = {
  getMini(state) {
    return state.mini;
  },
  getDrawer(state) {
    return state.drawer;
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
