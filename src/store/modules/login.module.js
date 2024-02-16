import { loginService } from "@/services/login.service";

const state = {
    isAuthenticated: false,
    user: null,
  };

const mutations = {
SET_AUTHENTICATION(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  SET_USER(state, user) {
    state.user = user;
  },
};

const actions = {
async login( {commit}, user) {
    try {
        commit('SET_AUTHENTICATION', true);
        commit('SET_USER', { username: user.username });
        await loginService.serviceLogin(user);
    } catch (error) {
    console.error("Login error:", error);
    throw error;
    }
},
};
  
  export default {
    namespaced: true, // you ensure that the actions, mutations, and state within the module are namespaced under the module's name. This helps avoid naming collisions with other modules.
    state,
    actions,
    mutations,
  };
  