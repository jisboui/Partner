import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "language"
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

  export const langService = {
    async getLang() {
        try {
            const response = await axios.get(API_URL, {
                headers: authHeaders,
            });
            console.log("Language response from the service: ", response);
            return response;
        } catch (error) {
            console.error("Language error:", error);
            throw error;
        }
    },
};