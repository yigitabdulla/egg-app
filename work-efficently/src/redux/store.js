import { configureStore } from "@reduxjs/toolkit";
import toastifyReducer from "./slices/toastifySlice"
import navbarReducer from "./slices/navbarSlice"

const store = configureStore({
  reducer: {
    toastify: toastifyReducer,
    navbar: navbarReducer,
  },
});

export default store;