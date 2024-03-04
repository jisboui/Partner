import { serviceFileUpload } from "@/services/fileUpload.service";

export default {
  namespaced: true,
 state : {
  fileUpload: null,
},

 mutations : {
  setFileUpload(state, fileUpload) {
    console.log('setting fileUpload in state:', fileUpload.data);
    state.fileUpload = fileUpload.data;
  },
},

 actions : {
  a_serviceFileUpload({ commit }, file) {
    return serviceFileUpload(file)
      .then(response => {
        commit('setFileUpload', response);
        console.log("fileupload response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("fileupload error:", error);
        throw error;
      });
  },
},
};
