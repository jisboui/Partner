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
    return Promise.reject(new Error("Token not found in local storage"));
  }
  return Promise.resolve(token);
};

const authHeaders = {
  'Content-Type': 'application/json'
};

  export const getLang = () => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        return axios.get(API_URL, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("Language response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("Language error:", error);
        return Promise.reject(error);
      });
  };

