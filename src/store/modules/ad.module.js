import { serviceAd,serviceAdP,serviceAdPU,serviceAdDe } from "@/services/ad.service";

let state = {
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

let actions = {
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
        // return response; // Uncomment if you want to return the response
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
        // return response; // Uncomment if you want to return the response
      })
      .catch(error => {
        console.error("Update adP action error: ", error);
        throw error;
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
