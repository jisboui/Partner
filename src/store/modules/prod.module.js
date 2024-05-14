import  { getProduct, addProduct, updateProduct, deleteProduct }  from "@/services/prod.service";


export default {
  namespaced: true,
 state : {
  prod: [],
  prodP: null,
  prodPu: null,
},

 mutations : {
  setProd(state, prod) {
    console.log('setting prod in state:', prod);
    state.prod = prod;
  },
},

 actions : {
  selectProduct({ commit }) {
    return getProduct()
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

  createProduct(_, prodP) {
    return addProduct(prodP)
      .then(response => {
        console.log("prodP response from the action : ", response);
      })
      .catch(error => {
        console.error("prodP error:", error);
        return Promise.reject(error);
      });
  },

  deleteProd(_, { id }) {
    return deleteProduct(id)
      .then(response => {
        console.log("Delete prodP action response: ", response);
      })
      .catch(error => {
        console.error("Delete prodP action error: ", error);
        return Promise.reject(error);
      });
  },

  updateProd(_, { id, prodPU }) {
    return updateProduct(id, prodPU)
      .then(response => {
        console.log("Update prodP action response: ", response);
      })
      .catch(error => {
        console.error("Update prodP action error: ", error);
        return Promise.reject(error);
      });
  },
},
};
