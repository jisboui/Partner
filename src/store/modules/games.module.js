import { gamesService } from "@/services/games.service";

const state = {
    games: [],
    };
const mutations = {
    setGames(state, games) {
        console.log('setting games in state:', games);
        state.games = games;
      },
};
const actions = {
    async fetchGames({ commit }) {
        try {
            const response = await gamesService.serviceGames();
            commit('setGames', response);
            console.log("Games response from the action : ", response);
            return response;
        } catch (error) {
            console.error("Games error:", error);
            throw error;
        }
    },
};
export default {
    namespaced: true,
    state,
    actions,
    mutations,
};