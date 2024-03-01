import { serviceFileUpload } from "@/services/fileUpload.service";

let state = {
  fileUpload: null,
};

const mutations = {
  setFileUpload(state, fileUpload) {
    console.log('setting fileUpload in state:', fileUpload.data);
    state.fileUpload = fileUpload.data;
  },
};

let actions = {
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
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
