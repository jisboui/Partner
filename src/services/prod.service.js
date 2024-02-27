import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "product"
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */
const authToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error("Token not found in local storage");
    throw new Error("Token not found in local storage");
  }
  return token;
};

const authHeaders = {
  'Authorization': `Bearer ${authToken()}`,
  'Content-Type': 'application/json'
};

export const prodService = {
  async serviceProd() {
    try {
      const response = await axios.get(API_URL+"/all", {
        headers: authHeaders,
      });
      console.log("prod response from the service: ", response);
      return response;
    } catch (error) {
      console.error("prod error:", error);
      throw error;
    }
  },
  async serviceProdP(prod) {
    try {
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
  },
  async serviceProdPU(id,prod) {
    try {
      const url = `${API_URL}/${id}`;
      const data = JSON.stringify(prod);
      const response = await axios.put(url, data, {
        headers: authHeaders,
      });
      console.log("prodPU response from the service: ", response);
      return response;
    } catch (error) {
      console.error("prodPU error:", error);
      throw error;
    }
  },
  async serviceProdDe(id) {
    try {
      const url = `${API_URL}/${id}`;
      const response = await axios.delete(url, {
        headers: authHeaders,
      });
      console.log("prodDE response from the service: ", response);
      return response;
    } catch (error) {
      console.error("prodDE error:", error);
      throw error;
    }
  }
};
