import axios from 'axios';

export const loginService = {
  async serviceLogin(user) {
    try {
      const data = JSON.stringify(user);
      const response = await axios.post('http://102.219.179.125:8085/partner/auth/authenticate/PARTNER', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Login response:", response);
      // Handle the response or commit mutations as needed.
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Throw the error or handle it as needed.
    }
  }
};
