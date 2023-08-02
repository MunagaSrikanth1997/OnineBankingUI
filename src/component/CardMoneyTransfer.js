// FormComponent.js
import React, { useState,useEffect } from 'react';
import  CardTransferService  from './CardTransferService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';

const CardMoneyTransfer = () => {
  const [formData, setFormData] = useState({
    // Initialize form data here, e.g., name, email, etc.
    fromAccount: '',
    toAccount: '',
    amount:'',
    cardNumber:'',
    cVV:'',
    validThroughDate:'',
    nameOnCard:''
    // Add more fields as needed
  });

  const cards=[];
  const [options, setOptions] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
 
  useEffect(() => {
    // Fetch data from the API
    const queryParams = {
        userGuid: localStorage.getItem('userGuid')
      };

       axios.get('http://localhost:8088/api/onlineBanking/accounts/getAccountsList',{params:queryParams})
      .then((response) => response.data)
      .then((data) => {
        // Update the options state with the API response
        console.log(data);
        data.map((account)=>{
if(null!=account && null!=account.cardsList){
  account.cardsList.map((card)=>{
cards.push(card);
  });

}
        })
        setOptions(cards);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);
  const handleOptionChange1 = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption1(selectedValue);

    // Update the formData with the selected option
    setFormData((prevData) => ({ ...prevData, fromAccount: selectedValue }));
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    formData.validThroughDate=date;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API with the form data here
    CardTransferService.cardMoneyTransfer(formData)
      .then((response) => {
        console.log('API response:', response);
        window.alert("payment is successfully completed...");
        // Handle the response as needed
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Handle the error as needed
      });
  };

  return (
    <div className="form-container cardsComponent">
         <h2 className="form-title">Cards MoneyTransfer</h2>
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="FromAccount">
        CardNumber:
        <input type="number" name="fromAccount" value={formData.fromAccount} onChange={handleChange} /><br/><br/>
      </label> */}
      {/* <label htmlFor="CardNumberf">
        CardNumber:
        <input type="number" name="cardNumber" value={formData.cardNumber} onChange={handleChange} /><br/><br/>
      </label> */}
      <label htmlFor="FromAccount">
        CardNumber:
        </label>
      <select value={selectedOption1} onChange={handleOptionChange1} required>
          <option value="">CardNumber</option>
          {options.map((option) => (
            
            <option key={option.cardNumber} value={option.cardNumber}>
              {option.cardNumber}
            </option>
          ))}
        </select>
      <label htmlFor="ToAccount">
        ToAccount:
        <input type="number" name="toAccount" value={formData.toAccount} onChange={handleChange} required/><br/><br/>
      </label>
      <label htmlFor="Amount">
        Amount:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required/><br/><br/>
      </label>
      
      <label htmlFor="cVV">
        CVV:
        <input type="number" name="cVV" value={formData.cVV} onChange={handleChange} required/><br/><br/>
      </label>
      {/* <label htmlFor="validThrDate">
      validThrDate:
        <input type="Date" name="validThroughDate" value={formData.validThroughDate} onChange={handleChange} /><br/><br/>
      </label> */}
      <label htmlFor="validThrDate">
      validThrDate:
       <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
      </label>
      <label htmlFor="nameOnCard">
      nameOnCard:
        <input type="text" name="nameOnCard" value={formData.nameOnCard} onChange={handleChange} /><br/><br/>
      </label>
      {/* Add more form fields as needed */}
      <div className="form-group">
      <button type="Cancel" className="button button4">Cancel</button>
      <button type="submit" className="button button4">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default CardMoneyTransfer;
