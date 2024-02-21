import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "dv"
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */

export const dvPUService = {
  async serviceDvPU(id,dv) {
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
      const url = `${API_URL}/${id}`;
      const data = JSON.stringify(dv);
      const response = await axios.put(url, data, {
        headers: authHeaders,
      });
      console.log("dvPU response from the service: ", response);
      return response;
    } catch (error) {
      console.error("dvPU error:", error);
      throw error;
    }
  }
};
