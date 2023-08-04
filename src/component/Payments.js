// src/components/ProductData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentsData = {
  fetchCustomerPaymentsData: async (id) => {
    try {
      const response = await axios.get('http://localhost:8088/'+id);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching product data');
    }
  },
};

export default PaymentsData;
