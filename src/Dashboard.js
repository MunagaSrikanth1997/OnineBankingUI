import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AccountsData from './component/Accounts';
import OpenAccount from './component/OpenAccount';
import Cards from './component/Cards';
import AccountMoneyTransComponent from './component/AccountsTransfer';
import CardMoneyTransferComponent from './component/CardMoneyTransfer';
import Transactions from './component/Transactions';
import TransactionsPortfolio from './component/TransactionsPortfolio';
import ApplicationHeader from './component/ApplicationHeader';

const Dashboard = ({loggedIn}) => {
  const [accounts, setAccounts] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState(true); // New state to manage loading state

  const history = useHistory();

  const handlePopupToggle = () => {
    setPopupOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    // Fetch user data
    AccountsData.fetchCustomerAccountsData(localStorage.getItem('userGuid'))
      .then((data) => {
        setAccounts(data);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);

  // Check if data is loading, show loading message if true
  if (loading) {
    return <div>Loading...</div>;
  }

  // If logged in state is false, redirect to login
  // This handles the case when the user is logged out after some time and tries to access the dashboard directly
  // if (!loggedIn) {
  //   history.push('/login');
  //   return null;
  // }

  return (
    <div>
      <div>
        <ApplicationHeader/>
        <h1>Accounts</h1>
      <div className="card-container">
        
        {accounts.map((acc, index) => (
          <Cards
            key={acc.accountNumber}
            accountName={acc.accountName}
            accountNumber={acc.accountNumber}
            availableBlance={acc.availableBlance}
            routingNumber={acc.routingNumber}
            cardsList={acc.cardsList}
          />
        ))}
      </div>
      {/* <a href="#openAccount" onClick={handlePopupToggle}>
        Open Account
      </a>
      {isPopupOpen && <OpenAccount onClose={handlePopupToggle} />} */}
      </div>
      <div className="container matrix-container">
      <div className="matrix-item"> <AccountMoneyTransComponent/></div>
      <div className="matrix-item"><CardMoneyTransferComponent/></div>
      <div className="matrix-item"> <Transactions/></div>
      <div className="matrix-item"> <TransactionsPortfolio/></div>
      </div>
    </div>
  );
};

export default Dashboard;
