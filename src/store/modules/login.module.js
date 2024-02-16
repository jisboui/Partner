import { loginService } from "@/services/login.service";

const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
const state = {
    isAuthenticated: isAuthenticated,
    user: null,
  };

const mutations = {
  SET_AUTHENTICATION(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
    console.log("Authenticated state :", isAuthenticated);
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
      localStorage.setItem("isAuthenticated", "true");   // Save the authentication state in local storage
        await loginService.serviceLogin(user);
    } catch (error) {
    console.error("Login error:", error);
    throw error;
    }
},
async logout({ commit }, router) {
    try {
      // Perform logout logic
      if (router) {
        let route = router.resolve({ name: 'Signin Illustration' });
        window.open(route.href, '_blank');
      }
      // Set isAuthenticated to false
      commit("SET_AUTHENTICATION", false);
      // Clear the authentication state from local storage
      localStorage.removeItem("isAuthenticated");

      // Other logic...

    } catch (error) {
      console.error("Logout error:", error);
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
  