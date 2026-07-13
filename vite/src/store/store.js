import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice.js";

export const store = configureStore({
  reducer: {
    counterSlice: counterSlice,
  },
});
