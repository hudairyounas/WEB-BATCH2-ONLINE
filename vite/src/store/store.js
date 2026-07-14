import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter.slice";
import userSlice from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    // here all the slice will be added
    counterSlice: counterSlice,
    userSlice: userSlice,
  },
});
