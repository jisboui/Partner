import { dvDeService } from "@/services/dvDe.service";

const state = {
  };
const mutations = {
};

const actions = {
    async deleteDv(_, { id }) {
      try {
        const response = await dvDeService.serviceDvDe(id);
        console.log("Delete dvP action response: ", response);
       /*  return response; */
      } catch (error) {
        console.error("Delete dvP action error: ", error);
        throw error;
      }
    },
  };

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};