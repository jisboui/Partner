import { serviceLogin } from "@/services/login.service";


export default {
 namespaced: true,
 state : {
 token: localStorage.getItem("token") || null,
  /* user: null, */
},

 mutations : {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  /* SET_USER(state, user) {
    state.user = user;
    console.log("User state :", user);
  }, */
},

 actions : {
  login({commit}, user) {
    return serviceLogin(user)
      .then(response => {
        /* commit('SET_USER', { username: user.username }); */  // not needed as of now
        commit('SET_TOKEN', response.data.token);
        console.log("Login response from the action : ", response);
        return response;
      })
      .catch(error => {
        console.error("Login error:", error);
        throw error;
      });
  },

  logout({commit}, router) {
    return new Promise((resolve, reject) => {
      try {
        if (router) {
          let route = router.resolve({ name: 'Signin Illustration' });
          window.location.href = route.href; // redirect to login page after logout
        }
        localStorage.removeItem("token");
        commit('SET_TOKEN', null);
        resolve();
      } catch (error) {
        console.error("Logout error:", error);
        reject(error);
      }
    });
  },
},
};
