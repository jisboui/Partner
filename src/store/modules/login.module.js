import { loginService } from "@/services/login.service";

const isAuthenticated = localStorage.getItem("isAuthenticated");

const state = {
    isAuthenticated: isAuthenticated,
    user: null,
  };

const mutations = {
  /* SET_AUTHENTICATION(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
    console.log("Authenticated state :", isAuthenticated);
  }, */
  /* SET_USER(state, user) {
    state.user = user;
  }, */
};

const actions = {
async login( _, user) {
    try {
        /* commit('SET_USER', { username: user.username }); */
        await loginService.serviceLogin(user); 
        
       localStorage.setItem("isAuthenticated", "true");  
    } catch (error) {
    console.error("Login error:", error);
    throw error;
    }
},
async logout(_, router) {
    try {
      if (router) {
        let route = router.resolve({ name: 'Signin Illustration' });
        window.open(route.href, '_blank'); // to take to new tab
      }
      localStorage.setItem("isAuthenticated", "false");
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },
};
  
  export default {
    namespaced: true, //to ensure that the actions, mutations, and state within the module are namespaced under the module's name. This helps avoid naming collisions with other modules.
    state,
    actions,
    mutations,
  };
  