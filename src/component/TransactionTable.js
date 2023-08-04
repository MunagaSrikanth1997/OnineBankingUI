// TransactionTable.js
import React, { useState, useEffect } from 'react';

const TransactionTable = ({ transactions, transactionsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  // Function to handle pagination navigation
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to get transactions for the current page
  const getCurrentTransactions = () => {
    const startIndex = (currentPage - 1) * transactionsPerPage;
    const endIndex = startIndex + transactionsPerPage;
    return transactions.slice(startIndex, endIndex);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>TransactionId</th>
            <th>Payment From</th>
            <th>Payment To</th>
            <th>Payment Type</th>
            <th>Amount(USD$)</th>
            <th>transactionDate</th>
            <th>paymentStatus</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentTransactions().map((transaction) => (
            <tr key={transaction.transactionId
            }>
                <td>{transaction.transactionId
}</td>
              <td>{transaction.paymentSource}</td>
              <td>{transaction.paymentDestination}</td>
              <td>{transaction.paymentType}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.transactionDate}</td>
              <td>{transaction.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination navigation */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionTable;
