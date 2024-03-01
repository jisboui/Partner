import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "game/";
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */

export const serviceGames = () => {
    return new Promise((resolve, reject) => {
      const authToken = localStorage.getItem('token');

      if (!authToken) {
        // Handle the case where the token is not available in local storage
        console.error("Token not found in local storage");
        reject(new Error("Token not found in local storage"));
      }

      const authHeaders = {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      };

      axios.get(API_URL + 'open', {
        headers: authHeaders,
      })
        .then(response => {
          console.log("Games response from the service: ", response);
          resolve(response);
        })
        .catch(error => {
          console.error("Games error:", error);
          reject(error);
        });
    });
  };
