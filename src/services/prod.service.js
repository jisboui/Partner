import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "product/all"
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */

export const prodService = {
  async serviceProd() {
    try {
      const authToken = localStorage.getItem('token');
      if (!authToken) {
        // Handle the case where the token is not available in local storage
        console.error("Token not found in local storage");
        throw new Error("Token not found in local storage");
      }
      const authHeaders = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      };
      const response = await axios.get(API_URL, {
        headers: authHeaders,
      });
      console.log("prod response from the service: ", response);
      return response;
    } catch (error) {
      console.error("prod error:", error);
      throw error;
    }
  }
};
