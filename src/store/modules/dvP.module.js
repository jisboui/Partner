import { dvPService } from "@/services/dvP.service";

const state = {
    dvP: null,
    };
const mutations = {
};
const actions = {
    async postdvP(_,dvP) {
        try {
            const response = await dvPService.serviceDvP(dvP);
            console.log("dvP response from the action : ", response);
        } catch (error) {
            console.error("dvP error:", error);
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