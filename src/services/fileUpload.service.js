import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "upload/WithRestriction"
const API_URL = dev.host + base_URL;

/* if (process.env.NODE_ENV === "production") {
  API_URL = production.host + base_URL;
} */

export const serviceFileUpload = (file) => {
    return new Promise((resolve, reject) => {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const partnerId = localStorage.getItem('partnerId');
        if (!partnerId) {
          console.error("partnerId not found in local storage");
          reject(new Error("partnerId not found in local storage"));
        }

        const url = `${API_URL}/${partnerId}`;
        const authToken = localStorage.getItem('token');
        if (!authToken) {
          console.error("Token not found in local storage");
          reject(new Error("Token not found in local storage"));
        }

        const authHeaders = {
          'Authorization': `Bearer ${authToken}`,
        };

        axios.post(url, formData, {
          headers: authHeaders,
        })
          .then(response => {
            console.log("File upload response from the service: ", response);
            resolve(response);
          })
          .catch(error => {
            console.error("File upload error:", error);
            reject(error);
          });
      } catch (error) {
        console.error("File upload error:", error);
        reject(error);
      }
    });
  };
