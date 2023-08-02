import React ,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logout from './Logout';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import CustomerProfile from './CustomerProfile';
const Header = () => {
    const [showProfile, setShowProfile] = useState(false);

  const customerInfo =JSON.parse(localStorage.getItem('userProfile'));
  const handleProfileClose = () => {
    setShowProfile(false);
  };
  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  return (
    <header className="header">
      <div className="logo">onlineBanking</div>
      <div className="user-info-button" onClick={handleProfileClick}>
      
        <span className="glyphicon glyphicon-user" aria-hidden="true">{customerInfo.firstName}  </span>
        {showProfile && <CustomerProfile customerInfo={customerInfo} onClose={handleProfileClose} />}
        <FontAwesomeIcon icon={faUser} size="lg" />
      </div>
      
      <flaot><Logout/></flaot>
    </header>
  );
};

export default Header;
