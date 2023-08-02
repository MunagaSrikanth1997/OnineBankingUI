// src/components/ProductData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccountsData = {
  fetchCustomerAccountsData: async (id) => {
    try {
      const queryParams = {
        userGuid: id
      };
      console.log("accounts call is triggering"+id);
      const response = (await axios.get('http://localhost:8088/api/onlineBanking/accounts/getAccountsList',{params:queryParams}));
    console.log(response);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching product data');
    }
  },
};

export default AccountsData;
