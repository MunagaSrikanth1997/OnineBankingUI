// PopupForm.js
import React, { useState } from 'react';
import openAccount from './OpenAccountService'

const OpenAccountForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Initialize form data here, e.g., name, email, etc.
    accountName: '',
    accountType: '',
    userGuid:''
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
formData.userGuid=localStorage.getItem('userGuid');
    const response = await openAccount.openAccount(formData);
    window.alert("account is created...");
    
    console.log('Form submitted:', formData);
    onClose(); // Close the popup after form submission
    window.location.reload();
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <h2>Open Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="accountName" value={formData.accountName} onChange={handleChange} /><br/>
          </label>
          <label>
          accountType:
          <label for="accountTypes">Choose a car:</label>

<select name="accounts" id="accTypes" value={formData.accountType} onChange={handleChange}>
  <option value="CHK">Checking</option>
  <option value="SAV">Savings</option>
  <option value="MTG">Mortgage</option>
  <option value="MAC">Master Card</option>
</select>
            {/* <input type="email" name="accountType" value={formData.accountType} onChange={handleChange} /> */}
          </label>
          {/* Add more form fields as needed */}
          <div className="button-container">
          <button type="Cancel" className="button button4">Cancel</button>
      <button type="submit" className="button button4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpenAccountForm;
