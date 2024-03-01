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
    return Promise.reject(new Error("Token not found in local storage"));
  }
  return Promise.resolve(token);
};

const authHeaders = {
  'Content-Type': 'application/json'
};

export const serviceDv=()=> {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        return axios.get(API_URL, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("dv response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("dv error:", error);
        return Promise.reject(error);
      });
  };

  export const serviceDvDe=(id)=> {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        return axios.delete(url, { headers: authHeaders });
      })
      .then((response) => {
        console.log("dvDE response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("dvDE error:", error);
        return Promise.reject(error);
      });
  };

  export const serviceDvP=(dv)=> {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const data = JSON.stringify(dv);
        return axios.post(API_URL, data, { headers: authHeaders });
      })
      .then((response) => {
        console.log("dvP response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("dvP error:", error);
        return Promise.reject(error);
      });
  };

  export const serviceDvPU=(id, dv)=> {
        const url = `${API_URL}/${id}`;
        const data = JSON.stringify(dv);
        return axios.put(url, data, { headers: authHeaders })
      .then((response) => {
        console.log("dvPU response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("dvPU error:", error);
        return Promise.reject(error);
      });
  };