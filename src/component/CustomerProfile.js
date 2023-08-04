import React,{ useState }  from 'react';
import CustomerProfileService from './CustomerProfileService';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CustomerProfile = ({customerInfo,onClose}) => {
  
  console.log("--------------------------------------------");
  console.log(customerInfo);
  
  return (
    <div className="customer-profile-container">
    <div className="customer-header">
      <h2>Customer Profile</h2>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
    <div className="customer-profile">
      <div className="user-icon">
        <FontAwesomeIcon icon={faUser} size="3x" />
      </div>
      <div className="customer-info">
      <p>Name: {customerInfo.firstName}{customerInfo.middleName}{customerInfo.lastName}</p>
      <p>UserId: {customerInfo.userId}</p>
      <p>Address: {customerInfo.address}</p>
      <p>Email: {customerInfo.email1}</p>
      <p>mobile: {customerInfo.mobile1}</p>
      <p>Email: {customerInfo.email1}</p>
      </div>
      {/* Add other customer profile information */}
    
    </div>
    
    </div>
  );
};

export default CustomerProfile;
