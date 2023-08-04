// App.js
import React, { useEffect, useState } from 'react';
import AmountVsYearGraph from './AmountVsYearGraph';
import axios from 'axios';

const TransactionsPortfolio = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const queryParams = {
      userGuid: localStorage.getItem("userGuid")
    };
    axios.get('http://localhost:8088/api/onlineBanking/transactions/getCustomerTransactions',{params:queryParams})
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Amount vs. Year Graph</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <AmountVsYearGraph data={data} />
      )}
    </div>
  );
};

export default TransactionsPortfolio;
