import { getLang } from '@/services/lang.service';

let state = {
  langs: [],
};

const mutations = {
  setLangs(state, langs) {
    console.log('setting langs in state:', langs);
    state.langs = langs;
  },
};

let actions = {
  fetchLangs({ commit }) {
    return getLang()
      .then(response => {
        commit('setLangs', response);
        console.log("Langs response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("Langs error:", error);
        throw error;
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
