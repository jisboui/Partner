import {historicService} from '@/services/historic.service';

const state = {
    hist: [],
    };
const mutations = {
    setHist(state, hist) {
        console.log('setting hist in state:', hist);
        state.hist = hist;
      },
};
const actions = {
    async fetchHist({ commit }) {
        try {
            const response = await historicService.getHistoric();
            commit('setHist', response);
            console.log("Historic response from the action : ", response);
            return response;
        } catch (error) {
            console.error("Historic error:", error);
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