import { getHistoric } from '@/services/historic.service';

let state = {
  hist: [],
};

const mutations = {
  setHist(state, hist) {
    console.log('setting hist in state:', hist);
    state.hist = hist;
  },
};

let actions = {
  fetchHist({ commit }) {
    return getHistoric()
      .then(response => {
        commit('setHist', response);
        console.log("Historic response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("Historic error:", error);
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
