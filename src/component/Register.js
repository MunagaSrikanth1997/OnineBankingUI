import React, { useState } from 'react';
import RegistrationService from './RegistrationService';
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName:'',
    userId:'',
    password:'',
    address:'',
    mobile1:'',
    mobile2:'',
    email1: '',
    email1: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await RegistrationService.customerRegist(formData);
 
    window.location.reload();
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="middleName">Middle Name:</label>
        <input
          type="text"
          id="middleName"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="userId">UserId:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange} required
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mobile1">Mobile1:</label>
        <input
          type="number"
          id="mobile1"
          name="mobile1"
          value={formData.mobile1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mobile2">Mobile2:</label>
        <input
          type="number"
          id="mobile2"
          name="mobile2"
          value={formData.mobile2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email1">EMail1:</label>
        <input
          type="email"
          id="email1"
          name="email1"
          value={formData.email1}
          onChange={handleChange} required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange} required
        />
      </div>
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
