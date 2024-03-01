import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "ads";
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

export const serviceAd=() =>{
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        return axios.get(API_URL, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("ad response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("ad error:", error);
        return Promise.reject(error);
      });
  };
  export const serviceAdP=(ad)=> {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const data = JSON.stringify(ad);
        return axios.post(API_URL, data, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("adP response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("adP error:", error);
        return Promise.reject(error);
      });
  };
  export const serviceAdPU=(id, ad) =>{
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        const data = JSON.stringify(ad);
        return axios.put(url, data, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("adPU response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("adPU error:", error);
        return Promise.reject(error);
      });
  };
  export const serviceAdDe=(id)=> {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        return axios.delete(url, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("adDE response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("adDE error:", error);
        return Promise.reject(error);
      });
  };
