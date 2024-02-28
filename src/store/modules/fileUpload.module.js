import { fileUploadService } from "@/services/fileUpload.service";

const state = {
    fileUpload: null,
    };

const mutations = {
    setFileUpload(state, fileUpload) {
        console.log('setting fileUpload in state:', fileUpload.data);
        state.fileUpload = fileUpload.data;
      },
};

const actions = {
    async a_serviceFileUpload({commit},file) {
        try {
            const response = await fileUploadService.serviceFileUpload(file);
            commit('setFileUpload', response);
            console.log("fileupload response from the action : ", response);
            return response;
        } catch (error) {
            console.error("fileupload error:", error);
            throw error;
        }
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};