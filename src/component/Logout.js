import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear the loggedIn value from local storage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userGuid');
    localStorage.removeItem('userProfile');
    // Redirect to the login page
    history.push('/login');
  };

  return (
    
      
      <button className="logout-button" onClick={handleLogout}><i className="fa fa-sign-out"></i> Logout</button>
    
  );
};

export default Logout;
