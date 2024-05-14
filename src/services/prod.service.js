import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "product"
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

export const getProduct = () => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        return axios.get(API_URL + "/all", {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("prod response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("prod error:", error);
        return Promise.reject(error);
      });
  };

  export const addProduct = (prod) => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const data = JSON.stringify(prod);
        return axios.post(API_URL, data, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("prodP response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("prodP error:", error);
        return Promise.reject(error);
      });
  };

  export const updateProduct = (id, prod) => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        const data = JSON.stringify(prod);
        return axios.put(url, data, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("prodPU response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("prodPU error:", error);
        return Promise.reject(error);
      });
  };

  export const deleteProduct = (id) => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        return axios.delete(url, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("prodDE response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("prodDE error:", error);
        return Promise.reject(error);
      });
  };

