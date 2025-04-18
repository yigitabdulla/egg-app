// src/redux/navbarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isVisible: true,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.isVisible = !state.isVisible;
    },
    showNavbar: (state) => {
      state.isVisible = true;
    },
    hideNavbar: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleNavbar, showNavbar, hideNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
