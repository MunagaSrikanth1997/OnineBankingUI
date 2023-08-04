import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Logout from './component/Logout';
import Register from './component/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const initialLoggedIn = localStorage.getItem('loggedIn') === 'true';
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('loggedIn') === 'true'
  );

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };
  const [showRegistration, setShowRegistration] = useState(false);

  const history = useHistory();

  const handleRegisterLinkClick = () => {
    setShowRegistration(true);
    localStorage.setItem("register",true)
  };

  const handleRegistrationSuccess = () => {
    // Redirect to login page
    setShowRegistration(false);
    history.push('/login');
  };

  const handleRegistrationCancel = () => {
    setShowRegistration(false);
  };
   // Store the loggedIn state in local storage whenever it changes
   useEffect(() => {
    localStorage.setItem('loggedIn', loggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            {/* Pass the handleLoginSuccess function to the Login component */}
            <Login onLoginSuccess={handleLoginSuccess} />
            {showRegistration ? (
        <div>
          <h2>Registration Form</h2>
          <Register onSuccess={handleRegistrationSuccess} onCancel={handleRegistrationCancel} />
        </div>
      ) : (
        <p>
          Don't have an account?{' '}
          <a href="#register" onClick={handleRegisterLinkClick}>
            Register here
          </a>
        </p>
      )}
          </Route>
          <Route exact path="/dashboard">
            {/* Pass the loggedIn state to the Dashboard component */}
            <Dashboard loggedIn={loggedIn} />
          </Route>
          <Route exact path="/logout" component={Logout} />
          {/* Redirect to login if no matching route is found */}
          <Route render={() => <Redirect to="/login" />} />
        </Switch>
       

      </div>
    </Router>
  );
};

export default App;
