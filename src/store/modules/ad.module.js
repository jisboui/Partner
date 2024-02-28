import { adService } from "@/services/ad.service";
const state = {
    ad: [],
    adP: null,
    adPu: null,
    };
const mutations = {
    setAd(state, ad) {
        console.log('setting ad in state:', ad);
        state.ad = ad;
      },
};
const actions = {
    async fetchad({ commit }) {
        try {
            const response = await adService.serviceAd();
            commit('setAd', response);
            console.log("Ad response from the action : ", response);
            return response;
        } catch (error) {
            console.error("ad error:", error);
            throw error;
        }
    },
    async postadP(_,adP) {
        try {
            const response = await adService.serviceAdP(adP);
            console.log("adP response from the action : ", response);
        } catch (error) {
            console.error("adP error:", error);
            throw error;
        }
    },
    async deleteAd(_, { id }) {
        try {
          const response = await adService.serviceAdDe(id);
          console.log("Delete adP action response: ", response);
         /*  return response; */
        } catch (error) {
          console.error("Delete adP action error: ", error);
          throw error;
        }
      },
      async updateAd(_, { id, adPU }) {
        try {
          const response = await adService.serviceAdPU(id, adPU);
          console.log("Update adP action response: ", response);
         /*  return response; */
        } catch (error) {
          console.error("Update adP action error: ", error);
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