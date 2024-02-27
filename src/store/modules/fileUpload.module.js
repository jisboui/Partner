import { fileUploadService } from "@/services/fileUpload.service";

const state = {
    };

const mutations = {
};

const actions = {
    async a_serviceFileUpload(_,file) {
        try {
            const response = await fileUploadService.serviceFileUpload(file);
            console.log("fileupload response from the action : ", response);
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