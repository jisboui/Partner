import {langService} from '@/services/lang.service';

const state = {
    langs: [],
    };
const mutations = {
    setLangs(state, langs) {
        console.log('setting langs in state:', langs);
        state.langs = langs;
      },
};
const actions = {
    async fetchLangs({ commit }) {
        try {
            const response = await langService.getLang();
            commit('setLangs', response);
            console.log("Langs response from the action : ", response);
            return response;
        } catch (error) {
            console.error("Langs error:", error);
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