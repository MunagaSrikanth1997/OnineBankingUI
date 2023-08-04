import axios from 'axios';

const  CustomerProfileService = {
  getUserIfo: async (userId) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to handle login requests
      const userParams={
        userId:userId
      }
      const response = await axios.post('http://localhost:8088/api/onlineBanking/transfer/makeInternalTransfer', {params:userParams});
      console.log("**********",response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default CustomerProfileService;