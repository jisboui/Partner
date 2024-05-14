import axios from 'axios';
import dev from '../config/dev';
/* import production from '../config/production'; */

const base_URL = "room"
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

export const getRoom = () => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        return axios.get(API_URL, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("room response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("room error:", error);
        return Promise.reject(error);
      });
  };

  export const addRoom = (room) => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const data = JSON.stringify(room);
        return axios.post(API_URL, data, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("roomP response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("roomP error:", error);
        return Promise.reject(error);
      });
  };

  export const updateRoom = (id, room) => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        const data = JSON.stringify(room);
        return axios.put(url, data, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("roomPU response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("roomPU error:", error);
        return Promise.reject(error);
      });
  };

  export const deleteRoom = (id) => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        return axios.delete(url, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("roomDE response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("roomDE error:", error);
        return Promise.reject(error);
      });
  };

  export const getRoomById = (id) => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        const url = `${API_URL}/${id}`;
        return axios.get(url, {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("roomGetID response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("roomGetID error:", error);
        return Promise.reject(error);
      });
  };

  export const getRoomCalendar = () => {
    return authToken()
      .then((token) => {
        authHeaders.Authorization = `Bearer ${token}`;
        return axios.get(API_URL + "/calendar" , {
          headers: authHeaders,
        });
      })
      .then((response) => {
        console.log("room Calendar response from the service: ", response);
        return Promise.resolve(response);
      })
      .catch((error) => {
        console.error("room Calendar error:", error);
        return Promise.reject(error);
      });
  };

