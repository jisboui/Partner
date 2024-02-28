import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "upload/WithRestriction"
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
    'Content-Type': 'multipart/form-data',
  };

export const fileUploadService = {
    async serviceFileUpload(file) {
        try {
          console.log('File object:', file);
        const formData = new FormData();
        formData.append('file', file);
        console.log('FormData properties:', formData.get('file'));

        const partnerId = localStorage.getItem('partnerId');
        if (!partnerId) {
          console.error("partnerId not found in local storage");
          throw new Error("partnerId not found in local storage");
      }
        const url = `${API_URL}/${partnerId}`;
        const response = await axios.post(url, formData, {
            headers: authHeaders,
        });
        console.log("File upload response from the service: ", response);
        return response;
        } catch (error) {
        console.error("File upload error:", error);
        throw error;
        }
    },
    };