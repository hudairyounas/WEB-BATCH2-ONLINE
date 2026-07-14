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
    changeName: (state) => {
      state.user.name = "Ali";
    },
  },
});

export default userSlice.reducer;
