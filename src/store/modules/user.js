const state = {
    token:'',
    userdata:[]
};
const mutations = {
    setToken(state, token) {
        state.token = token
        localStorage.token = token
    },
    setUserData(state, userdata) {
        state.userdata = userdata
        localStorage.userdata = userdata
    },
};
const actions = {};
const getters = {
    getToken(state) {
        if (!state.token) {
          state.token = localStorage.getItem('token')
        }
        return state.token
    },
    getUserData(state) {
        if (!state.userdata) {
          state.userdata = localStorage.getItem('userdata')
        }
        return state.userdata
    }
};
export default {
  state,
  getters,
  mutations,
  actions,
};
