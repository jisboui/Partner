import { serviceAd,serviceAdP,serviceAdPU,serviceAdDe,serviceAdI } from "@/services/ad.service";
export default {
namespaced: true,
 state : {
  ad: [],
  adP: null,
  adPu: null,
},

 mutations : {
  setAd(state, ad) {
    console.log('setting ad in state:', ad);
    state.ad = ad;
  },
},

 actions : {
  fetchad({ commit }) {
    return serviceAd()
      .then(response => {
        commit('setAd', response);
        console.log("Ad response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("ad error:", error);
        throw error;
      });
  },
  fetchadI(_, { id }) {
    return serviceAdI(id)
      .then(response => {
        console.log("adI response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("adI error:", error);
        throw error;
      });
  },
  postadP(_, adP) {
    return serviceAdP(adP)
      .then(response => {
        console.log("adP response from the action : ", response);
      })
      .catch(error => {
        console.error("adP error:", error);
        throw error;
      });
  },
  deleteAd(_, { id }) {
    return serviceAdDe(id)
      .then(response => {
        console.log("Delete adP action response: ", response);
        return response; 
      })
      .catch(error => {
        console.error("Delete adP action error: ", error);
        throw error;
      });
  },
  updateAd(_, { id, adPU }) {
    return serviceAdPU(id, adPU)
      .then(response => {
        console.log("Update adP action response: ", response);
        return response; 
      })
      .catch(error => {
        console.error("Update adP action error: ", error);
        throw error;
      });
  },
},
};
