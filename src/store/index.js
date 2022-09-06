import { createStore } from "vuex";
import { API_DEVELOPMENTS_URL } from "@/common/config.js";

const state = {
  devs: [],
};

const getters = {
  getDevs: (state) => state.devs,
};

const mutations = {
  setDevs(state, payload) {
    state.devs = payload;
  },
};

const actions = {
  async fetchDevs({ commit }) {
    const data = await (await fetch(API_DEVELOPMENTS_URL)).json();
    commit("setDevs", data);
  },
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
