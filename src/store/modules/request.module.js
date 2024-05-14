import { getRequest,getRequestById,deleteRequest } from '@/services/request.service';

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
  selectRequests({ commit }) {
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
  selectRequestById (_, { id }) {
    return getRequestById(id)
      .then(response => {
        console.log("RequestID response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("RequestID error:", error);
        throw error;
      });
  },
  deleteRequest(_, { id }) {
    return deleteRequest(id)
      .then(response => {
        console.log("Delete request action response: ", response);
        return response; 
      })
      .catch(error => {
        console.error("Delete request action error: ", error);
        throw error;
      });
  },
},
};
