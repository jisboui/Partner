import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "ads"
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

export const adService = {
  async serviceAd() {
    try {
      const response = await axios.get(API_URL, {
        headers: authHeaders,
      });
      console.log("ad response from the service: ", response);
      return response;
    } catch (error) {
      console.error("ad error:", error);
      throw error;
    }
  },
  async serviceAdP(ad) {
    try {
      const data = JSON.stringify(ad);
      const response = await axios.post(API_URL, data, {
        headers: authHeaders,
      });
      console.log("adP response from the service: ", response);
      return response;
    } catch (error) {
      console.error("adP error:", error);
      throw error;
    }
  },
  async serviceAdPU(id,ad) {
    try {
      const url = `${API_URL}/${id}`;
      const data = JSON.stringify(ad);
      const response = await axios.put(url, data, {
        headers: authHeaders,
      });
      console.log("adPU response from the service: ", response);
      return response;
    } catch (error) {
      console.error("adPU error:", error);
      throw error;
    }
  },
  async serviceAdDe(id) {
    try {
      const url = `${API_URL}/${id}`;
      const response = await axios.delete(url, {
        headers: authHeaders,
      });
      console.log("adDE response from the service: ", response);
      return response;
    } catch (error) {
      console.error("adDE error:", error);
      throw error;
    }
  }
};

