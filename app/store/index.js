import { configureStore } from '@reduxjs/toolkit';
import login from './middleware/login';
import authSlice from './authSlice';
const store = configureStore({
  reducer: {
    authSlice,
  },
  middleware: [login],
});
export default store;
