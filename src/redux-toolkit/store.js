import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../redux-toolkit/reducers/email/email.reducer';

export const store = configureStore({
  reducer: {
    email: emailReducer
  }
});
