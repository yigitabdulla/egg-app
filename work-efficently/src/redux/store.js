import { configureStore } from "@reduxjs/toolkit";
import toastifyReducer from "./slices/toastifySlice"

const store = configureStore({
  reducer: {
    toastify: toastifyReducer,
  },
});

export default store;