import  { serviceProd, serviceProdP, serviceProdPU, serviceProdDe }  from "@/services/prod.service";

let state = {
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

let actions = {
  fetchprod({ commit }) {
    return serviceProd()
      .then(response => {
        commit('setProd', response);
        console.log("Prod response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("prod error:", error);
        return Promise.reject(error);
      });
  },

  postprodP(_, prodP) {
    return serviceProdP(prodP)
      .then(response => {
        console.log("prodP response from the action : ", response);
      })
      .catch(error => {
        console.error("prodP error:", error);
        return Promise.reject(error);
      });
  },

  deleteProd(_, { id }) {
    return serviceProdDe(id)
      .then(response => {
        console.log("Delete prodP action response: ", response);
      })
      .catch(error => {
        console.error("Delete prodP action error: ", error);
        return Promise.reject(error);
      });
  },

  updateProd(_, { id, prodPU }) {
    return serviceProdPU(id, prodPU)
      .then(response => {
        console.log("Update prodP action response: ", response);
      })
      .catch(error => {
        console.error("Update prodP action error: ", error);
        return Promise.reject(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
