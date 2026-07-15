import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      name: "Hudair",
      age: 19,
      city: "FSD",
    },
  },
  reducers: {
    changeName: (state, action) => {
      state.user.name = action.payload;
    },
  },
});

export default userSlice.reducer;
