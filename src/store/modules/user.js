const state = {
    token:''
};
const mutations = {
    setToken(state, token) {
        state.token = token
        localStorage.token = token
    },
};
const actions = {};
const getters = {
    getToken(state) {
        if (!state.token) {
          state.token = localStorage.getItem('token')
        }
        return state.token
    }
};
export default {
  state,
  getters,
  mutations,
  actions,
};
