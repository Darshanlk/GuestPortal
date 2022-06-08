import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../reducers/authReducers';
import userDataReducers from '../reducers/userDataReducers';

import mapDataReducers from '../reducers/mapDataReducers';
export const store = configureStore({
  reducer: {
    user:authReducers,
    userDetails:userDataReducers,
    mapData:mapDataReducers
   
  },
});