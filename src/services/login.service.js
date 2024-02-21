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
      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log("Login response from the service : ", response);

      } else {
        console.error("Login error: Token not found in the response");
        throw new Error("Token not found in the response"); 
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }
};
