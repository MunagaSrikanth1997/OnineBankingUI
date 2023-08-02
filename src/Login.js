// src/Login.js
import React, { useState } from 'react';
import loginService from './loginService';
import { useHistory } from 'react-router-dom';
import RegistrationForm from './component/Register';



const Login = ({onLoginSuccess}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(111111);
      const response = await loginService.login(userId, password);
     console.log(response);
        localStorage.setItem('userGuid', response.data.userGuid);
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('userProfile', JSON.stringify(response.data));
     
      onLoginSuccess();
      history.push('/dashboard');
     
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className='login-form-container'>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;