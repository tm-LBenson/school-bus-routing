import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoggedIn: false,
  user: {},
  error: {},
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { response, error } = action.payload;
      if (response) {
        state.isLoggedIn = true;
        state.user = response;
        console.log('user logged in');
      } else {
        state.error = error;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
