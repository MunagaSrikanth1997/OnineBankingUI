import axios from 'axios';

const  AccountsTransferService = {
  accountMoneyTransfer: async (moneyTrans) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to handle login requests
      const response = await axios.post('http://localhost:8088/api/onlineBanking/transfer/makeInternalTransfer', moneyTrans);
      console.log("**********",response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default AccountsTransferService;