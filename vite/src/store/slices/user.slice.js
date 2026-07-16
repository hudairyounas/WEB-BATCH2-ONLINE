import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user1: {
      userName: "",
      age: "",
      password: "",
    },
  },
  reducers: {
    changeUsername: (state, action)=>{
      console.log(action.payload)
      state.user1.userName = action.payload
    },
    changeAge: (state, action) => {
      state.user1.age = action.payload
    },
    changePassword: (state, action)=>{
      state.user1.password = action.payload
    }
  }
});

export const {changeUsername, changeAge, changePassword} = userSlice.actions;
export default userSlice.reducer;
