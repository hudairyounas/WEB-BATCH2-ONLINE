import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    userName: "Hudair",
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});
export default counterSlice.reducer;