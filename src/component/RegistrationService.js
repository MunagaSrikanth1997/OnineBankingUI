// src/loginService.js
import axios from 'axios';

const RegistrationService = {
  customerRegist: async (registerObj) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to handle login requests
      const response = await axios.post('http://localhost:8088/api/onlineBanking/register', registerObj);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default RegistrationService;