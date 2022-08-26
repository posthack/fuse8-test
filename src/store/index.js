import { createStore } from "vuex";

const apiURL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";

export default createStore({
  state: {
    devs: [],
  },
  mutations: {
    setDevs(state, payload) {
      state.devs = payload;
    },
  },
  actions: {
    async fetchDevs({ commit }) {
      const data = await (await fetch(apiURL)).json();
      commit("setDevs", data);
    },
  },
  getters: {
    getDevs: (state) => state.devs,
  },
});
