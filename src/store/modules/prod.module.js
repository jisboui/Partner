import { prodService } from "@/services/prod.service";
import { prodPService } from "@/services/prodP.service";
import { prodDeService } from "@/services/prodDe.service";
import { prodPUService } from "@/services/prodPU.service";
const state = {
    prod: [],
    prodd: [],
    prodP: null,
    prodPu: null,
    };
const mutations = {
    setProd(state, prod) {
        console.log('setting prod in state:', prod);
        state.prod = prod;
      },
      updateProd(state, prod) {
        state.prodd = prod;
        
        console.log('setting proddddddd in state:', prod);
      }
};
const actions = {
    async fetchprod({ commit }) {
        try {
            const response = await prodService.serviceProd();
            commit('setProd', response);
            console.log("Prod response from the action : ", response);
            return response;
        } catch (error) {
            console.error("prod error:", error);
            throw error;
        }
    },
    async postprodP(_,prodP) {
        try {
            const response = await prodPService.serviceProdP(prodP);
            console.log("prodP response from the action : ", response);
        } catch (error) {
            console.error("prodP error:", error);
            throw error;
        }
    },
    async deleteProd(_, { id }) {
        try {
          const response = await prodDeService.serviceProdDe(id);
          console.log("Delete prodP action response: ", response);
         /*  return response; */
        } catch (error) {
          console.error("Delete prodP action error: ", error);
          throw error;
        }
      },
      async updateProd(_, { id, prodPU }) {
        try {
          const response = await prodPUService.serviceProdPU(id, prodPU);
          console.log("Update prodP action response: ", response);
         /*  return response; */
        } catch (error) {
          console.error("Update prodP action error: ", error);
          throw error;
        }
      },
}
export default {
    namespaced: true,
    state,
    actions,
    mutations,
};