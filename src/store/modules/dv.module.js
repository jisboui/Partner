import { dvService } from "@/services/dv.service";
import { dvPService } from "@/services/dvP.service";
import { dvDeService } from "@/services/dvDe.service";
import { dvPUService } from "@/services/dvPU.service";

const state = {
    dv: [],
    dvP: null,
    dvPu: null,
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
    async postdvP(_,dvP) {
        try {
            const response = await dvPService.serviceDvP(dvP);
            console.log("dvP response from the action : ", response);
        } catch (error) {
            console.error("dvP error:", error);
            throw error;
        }
    },
    async deleteDv(_, { id }) {
        try {
          const response = await dvDeService.serviceDvDe(id);
          console.log("Delete dvP action response: ", response);
         /*  return response; */
        } catch (error) {
          console.error("Delete dvP action error: ", error);
          throw error;
        }
      },
      async updateDv(_, { id, dvPU }) {
        try {
          const response = await dvPUService.serviceDvPU(id, dvPU);
          console.log("Update dvP action response: ", response);
         /*  return response; */
        } catch (error) {
          console.error("Update dvP action error: ", error);
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