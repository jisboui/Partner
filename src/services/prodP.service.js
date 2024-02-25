import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "product"
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */

export const prodPService = {
  async serviceProdP(prod) {
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
      const data = JSON.stringify(prod);
      const response = await axios.post(API_URL, data, {
        headers: authHeaders,
      });
      console.log("prodP response from the service: ", response);
      return response;
    } catch (error) {
      console.error("prodP error:", error);
      throw error;
    }
  }
};
