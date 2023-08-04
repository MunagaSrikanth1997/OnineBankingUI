import axios from 'axios';

const openAccountService = {
  openAccount: async (openAccount) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to handle login requests
      const response = await axios.post('http://localhost:8088/api/onlineBanking/accounts/openAccount', openAccount);
      console.log("**********",response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default openAccountService;