import  {serviceDv,serviceDvDe,serviceDvP,serviceDvPU}  from "@/services/dv.service";

export default {
  namespaced: true,
 state : {
  dv: [],
  dvP: null,
  dvPu: null,
},

 mutations : {
  setDv(state, dv) {
    console.log('setting dv in state:', dv);
    state.dv = dv;
  },
},

 actions : {
  fetchdv({ commit }) {
    return serviceDv()
      .then(response => {
        commit('setDv', response);
        console.log("Dv response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("dv error:", error);
        return Promise.reject(error);
      });
  },

  postdvP(_, dvP) {
    return serviceDvP(dvP)
      .then(response => {
        console.log("dvP response from the action : ", response);
      })
      .catch(error => {
        console.error("dvP error:", error);
        return Promise.reject(error);
      });
  },

  deleteDv(_, { id }) {
    return serviceDvDe(id)
      .then(response => {
        console.log("Delete dvP action response: ", response);
      })
      .catch(error => {
        console.error("Delete dvP action error: ", error);
        return Promise.reject(error);
      });
  },

  updateDv(_, { id, dvPU }) {
    return serviceDvPU(id, dvPU)
      .then(response => {
        console.log("Update dvP action response: ", response);
        // You can return the response if needed
        return response;
      })
      .catch(error => {
        console.error("Update dvP action error: ", error);
        throw error; // Use throw to maintain the error handling consistency
      });
  },
  
},

};