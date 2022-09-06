import { createStore } from "vuex";
import { API_DEVELOPMENTS_URL } from "@/common/config.js";
import { FETCH_DEVS } from "./actions.type";
import { SET_DEVS } from "./mutations.type";

const state = {
  devs: [],
};

const getters = {
  getDevs: (state) => state.devs,
};

const mutations = {
  [SET_DEVS](state, payload) {
    state.devs = payload;
  },
};

const actions = {
  async [FETCH_DEVS]({ commit }) {
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
