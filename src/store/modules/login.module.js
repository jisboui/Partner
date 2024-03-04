import { serviceLogin } from "@/services/login.service";

const isAuthenticated = localStorage.getItem("isAuthenticated");

export default {
  namespaced: true,
 state : {
  isAuthenticated: isAuthenticated,
  user: null,
},

 mutations : {
  SET_AUTHENTICATION(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
    console.log("Authenticated state :", isAuthenticated);
  },
  SET_USER(state, user) {
    state.user = user;
    console.log("User state :", user);
  },
},

 actions : {
  login({ commit }, user) {
    return serviceLogin(user)
      .then(response => {
        commit('SET_USER', { username: user.username });
        localStorage.setItem("isAuthenticated", "true");
        console.log("Login response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("Login error:", error);
        throw error;
      });
  },

  logout({ commit }, router) {
    return new Promise((resolve, reject) => {
      try {
        if (router) {
          let route = router.resolve({ name: 'Signin Illustration' });
          window.open(route.href, '_blank'); // to take to a new tab
        }
        localStorage.setItem("isAuthenticated", "false");
        commit('SET_AUTHENTICATION', false);
        resolve();
      } catch (error) {
        console.error("Logout error:", error);
        reject(error);
      }
    });
  },
},
};
