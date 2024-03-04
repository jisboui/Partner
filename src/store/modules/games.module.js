import { serviceGames } from "@/services/games.service";

export default {
  namespaced: true,
 state : {
  games: [],
},

 mutations : {
  setGames(state, games) {
    console.log('setting games in state:', games);
    state.games = games;
  },
},

 actions : {
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
},
};
