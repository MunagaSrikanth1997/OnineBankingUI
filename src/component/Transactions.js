
// App.js
import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import axios from 'axios';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch transactions data from the API
    const queryParams = {
      userGuid: localStorage.getItem("userGuid")
    };
    axios.get('http://localhost:8088/api/onlineBanking/transactions/getCustomerTransactions',{params:queryParams})
      .then((response) => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Transaction List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <TransactionTable transactions={transactions} transactionsPerPage={5} />
      )}   
    </div>
  );
};

export default App;
