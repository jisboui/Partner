import { dvPUService } from "@/services/dvPU.service";

const state = {
    dv: null,
  };
const mutations = {
};

const actions = {
    async updateDvP(_, { id, dv }) {
      try {
        const response = await dvPUService.serviceDvPU(id, dv);
        console.log("Update dvP action response: ", response);
       /*  return response; */
      } catch (error) {
        console.error("Update dvP action error: ", error);
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