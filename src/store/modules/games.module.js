import { serviceGames } from "@/services/games.service";

let state = {
  games: [],
};

const mutations = {
  setGames(state, games) {
    console.log('setting games in state:', games);
    state.games = games;
  },
};

let actions = {
  fetchGames({ commit }) {
    return serviceGames()
      .then(response => {
        commit('setGames', response);
        console.log("Games response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("Games error:", error);
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
