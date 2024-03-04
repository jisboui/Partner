import { getRequest } from '@/services/request.service';

export default {
  namespaced: true,
 state : {
  requests: [],
},

 mutations : {
  setRequests(state, requests) {
    console.log('setting requests in state:', requests);
    state.requests = requests;
  },
},

 actions : {
  fetchRequests({ commit }) {
    return getRequest()
      .then(response => {
        commit('setRequests', response);
        console.log("Requests response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("Requests error:", error);
        throw error;
      });
  },
},
};
