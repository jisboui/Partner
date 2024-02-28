import { prodService } from "@/services/prod.service";
const state = {
    prod: [],
    prodP: null,
    prodPu: null,
    };
const mutations = {
    setProd(state, prod) {
        console.log('setting prod in state:', prod);
        state.prod = prod;
      },
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
            const response = await prodService.serviceProdP(prodP);
            console.log("prodP response from the action : ", response);
        } catch (error) {
            console.error("prodP error:", error);
            throw error;
        }
    },
    async deleteProd(_, { id }) {
        try {
          const response = await prodService.serviceProdDe(id);
          console.log("Delete prodP action response: ", response);
         /*  return response; */
        } catch (error) {
          console.error("Delete prodP action error: ", error);
          throw error;
        }
      },
      async updateProd(_, { id, prodPU }) {
        try {
          const response = await prodService.serviceProdPU(id, prodPU);
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