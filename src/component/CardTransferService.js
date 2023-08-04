import axios from 'axios';

const CardTransferService = {
  cardMoneyTransfer: async (moneyTrans) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to handle login requests
      const response = await axios.post('http://localhost:8088/api/onlineBanking/card/cardTransfer', moneyTrans);
      console.log("**********",response);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default CardTransferService;