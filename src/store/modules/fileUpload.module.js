import { serviceFileUpload } from "@/services/fileUpload.service";

export default {
  namespaced: true,
 state : {
  fileUpload: null,
  fileUploads: {
    woodad: null,
    tvad: null,
    carre: null,
    hrec: null,
    ovniad: null,
    circle: null,
    poster: null,
    vrec: null
  },
},

 mutations : {
  setFileUpload(state, fileUpload) {
    console.log('setting fileUpload in state:', fileUpload.data);
    state.fileUpload = fileUpload.data;
  },
  setFileUploads(state, { propName, fileUploads }) {
    state.fileUploads[propName] = fileUploads;
  }
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
  a_serviceFileUploads({ commit }, { propName, file }) {
    return serviceFileUpload(file)
      .then(response => {
        commit('setFileUploads', { propName, fileUploads: response.data });
        return response;
      })
      .catch(error => {
        console.error("fileupload error:", error);
        throw error;
      });
  },
},
};
