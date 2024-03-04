import { getLang } from '@/services/lang.service';

export default {
  namespaced: true,
 state : {
  langs: [],
},

 mutations : {
  setLangs(state, langs) {
    console.log('setting langs in state:', langs);
    state.langs = langs;
  },
},

 actions : {
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
},
};
