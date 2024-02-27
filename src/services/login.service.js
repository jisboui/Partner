import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "auth/"
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */

export const loginService = {
  async serviceLogin(user) {
    try {
      const data = JSON.stringify(user);
      const response = await axios.post(API_URL+ "authenticate/PARTNER", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data && response.data.token && response.data.user.partnerId) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('partnerId', response.data.user.partnerId);
        console.log("Login response from the service : ", response);

      } else {
        console.error("Login error: Token not found in the response");
        throw new Error("Token not found in the response"); 
      }
     /*  return response; */ //no need to return response to the action since i'm already locally storing the partnerId from here
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
};
