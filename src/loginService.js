// src/loginService.js
import axios from 'axios';

const loginService = {
  login: async (userId, password) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to handle login requests
      const response = await axios.post('http://localhost:8088/api/onlineBanking/login', {
        userId,
        password,
      });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default loginService;