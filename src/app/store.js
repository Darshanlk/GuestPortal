import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../reducers/authReducers';
import userDataReducers from '../reducers/userDataReducers';


export const store = configureStore({
  reducer: {
    user:authReducers,
    userDetails:userDataReducers
   
  },
});