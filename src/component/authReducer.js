// This is a basic example of an authReducer to manage authentication state

const initialState = {
    loggedIn: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, loggedIn: true };
      case 'LOGOUT':
        return { ...state, loggedIn: false };
      default:
        return state;
    }
  };
  
  export default authReducer;
  