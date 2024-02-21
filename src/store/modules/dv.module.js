import { dvService } from "@/services/dv.service";

const state = {
    dv: [],
    };
const mutations = {
    setDv(state, dv) {
        console.log('setting dv in state:', dv);
        state.dv = dv;
      },
};
const actions = {
    async fetchdv({ commit }) {
        try {
            const response = await dvService.serviceDv();
            commit('setDv', response);
            console.log("Dv response from the action : ", response);
            return response;
        } catch (error) {
            console.error("dv error:", error);
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