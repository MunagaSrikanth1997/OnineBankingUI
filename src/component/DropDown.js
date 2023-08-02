import React, { useState, useEffect } from 'react';
import AccountsTransferService from './AccountsTransferService';
import axios from 'axios';
const DropDownComponent = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    userGuid: '',
    userId: '',
    externalAccountNumber:'',
    isExternalAccount:'off'
  });

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
        setOptions(data);
      })
      .catch((error) => {
        console.error('Error fetching options:', error);
      });
  }, []);

  const handleOptionChange1 = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption1(selectedValue);

    // Update the formData with the selected option
    setFormData((prevData) => ({ ...prevData, fromAccount: selectedValue }));
  };

  const handleOptionChange2 = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption2(selectedValue);

    // Update the formData with the selected option
    setFormData((prevData) => ({ ...prevData, toAccount: selectedValue }));
  };

  const handlExternalAccount = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption2(selectedValue);

    // Update the formData with the selected option
    setFormData((prevData) => ({ ...prevData, externalAccountNumber: selectedValue }));
  };
  const [isDropdownVisible, setDropdownVisible] = useState(true);
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    formData.isExternalAccount=e.target.value;
    setCheckboxChecked(!isCheckboxChecked);
    setDropdownVisible(!isCheckboxChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.userGuid = localStorage.getItem('userGuid');
    formData.userId = localStorage.getItem('userId');
    AccountsTransferService.accountMoneyTransfer(formData)
      .then((response) => {
        console.log('API response:', response);
        window.alert('Payment is successfully completed...');
       
        // Clear the form after successful submission
        // setSelectedOption1('');
        // setSelectedOption2('');
        // setFormData({
        //   fromAccount: '',
        //   toAccount: '',
        //   amount: '',
        //   userGuid: '',
        //   userId: ''
        // });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
      window.location.reload();
  };

  const filteredOptions2 = options.filter((option) => option.accountNumber !== selectedOption1);

  return (
    <div className="form-container accountsComponent">
      <h2 className="form-title">Accounts MoneyTransfer</h2>
      <form onSubmit={handleSubmit}>
        <label>From Account</label>
        <select value={selectedOption1} onChange={handleOptionChange1} required>
          <option value="">From Account</option>
          {options.map((option) => (
            <option key={option.accountNumber} value={option.accountNumber}>
              {option.accountName}
            </option>
          ))}
        </select>
        <br />
        <label>
        <input
          type="checkbox"
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
        />
        isExternalAccountTransfer
      </label>
        {isCheckboxChecked ? (
          // Text input when dropdown is hidden
          <>
            <label>Enter Account Number</label>
            <input
              type="text"
              value={selectedOption2}
              onChange={handlExternalAccount}
              required />
          </>
        ) : (
          // Dropdown when checkbox is not checked
          <>
            <label>To Account</label>
            <select value={selectedOption2} onChange={handleOptionChange2} required>
              <option value="">To Account</option>
              {filteredOptions2.map((option) => (
                <option key={option.accountNumber} value={option.accountNumber}>
                  {option.accountName}
                </option>
              ))}
            </select>
          </>
        )}
        <label>Amount $:</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required/>
        
        <div className="form-group">
          <button type="button" className="button button4">
            Cancel
          </button>
          <button type="submit" className="button button4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DropDownComponent;
