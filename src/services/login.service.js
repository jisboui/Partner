import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "auth/";
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */

export const serviceLogin = (user) =>{
    return new Promise((resolve, reject) => {
      const data = JSON.stringify(user);
      axios.post(API_URL + "authenticate/PARTNER", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (response.data && response.data.token && response.data.user.partnerId) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('partnerId', response.data.user.partnerId);
            console.log("Login response from the service : ", response);
            resolve(response);
          } else {
            console.error("Login error: Token not found in the response");
            reject(new Error("Token not found in the response"));
          }
        })
        .catch(error => {
          console.error("Login error:", error);
          reject(error);
        });
    });
  };
