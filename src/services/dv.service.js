import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "dv";
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

export const dvService = {

  async serviceDv() {
    try {
      const response = await axios.get(API_URL, {
        headers: authHeaders,
      });
      console.log("dv response from the service: ", response);
      return response;
    } catch (error) {
      console.error("dv error:", error);
      throw error;
    }
  },
  async serviceDvDe(id) {
    try {
      const url = `${API_URL}/${id}`;
      const response = await axios.delete(url, { headers: authHeaders });
      console.log("dvDE response from the service: ", response);
      return response;
    } catch (error) {
      console.error("dvDE error:", error);
      throw error;
    }
  },

  async serviceDvP(dv) {
    try {
      const data = JSON.stringify(dv);
      const response = await axios.post(API_URL, data, { headers: authHeaders });
      console.log("dvP response from the service: ", response);
      return response;
    } catch (error) {
      console.error("dvP error:", error);
      throw error;
    }
  },

  async serviceDvPU(id, dv) {
    try {
      const url = `${API_URL}/${id}`;
      const data = JSON.stringify(dv);
      const response = await axios.put(url, data, { headers: authHeaders });
      console.log("dvPU response from the service: ", response);
      return response;
    } catch (error) {
      console.error("dvPU error:", error);
      throw error;
    }
  }
};

 
