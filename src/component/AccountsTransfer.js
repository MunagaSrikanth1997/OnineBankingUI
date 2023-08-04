// FormComponent.js
import React, { useState } from 'react';
import  AccountsTransferService  from './AccountsTransferService';
import DropDown from './DropDown';

const FormComponent = () => {
  // const [formData, setFormData] = useState({
  //   // Initialize form data here, e.g., name, email, etc.
  //   fromAccount: '',
  //   toAccount: '',
  //   amount:'',
  //   userGuid:'',
  //   userId:''
  //   // Add more fields as needed
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Call the API with the form data here
  //   formData.userGuid=localStorage.getItem('userGuid');
  //   formData.userId=localStorage.getItem('userId');
  //   AccountsTransferService.accountMoneyTransfer(formData)
  //     .then((response) => {
  //       console.log('API response:', response);
  //       // Handle the response as needed
  //       window.alert("payment is successfully completed...")
        
  //     })
  //     .catch((error) => {
  //       console.error('Error submitting form:', error);
  //       // Handle the error as needed
  //     });
  // };

  return (
    <DropDown/>
  );
};

export default FormComponent;
