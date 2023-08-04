// store.js
import { createStore } from 'redux';

const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
