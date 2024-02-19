import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "game/"
const  API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  url = production.host + path;
} */

export const gamesService = {
  async serviceGames() {
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
      const response = await axios.get(API_URL+'open', {
        headers: authHeaders,
      });
      console.log("Games response from the service: ", response);
      return response;
    } catch (error) {
      console.error("Games error:", error);
      throw error;
    }
  }
};
