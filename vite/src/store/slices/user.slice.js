import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const getUser = createAsyncThunk("user/getUser", async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
})


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user1: {
      userName: "",
      age: "",
      password: "",
    },
    userList:[],
    error: null,
    isLoading: true,
  },
  reducers: {
    changeUsername: (state, action) => {
      console.log(action.payload);
      state.user1.userName = action.payload;
    },
    changeAge: (state, action) => {
      state.user1.age = action.payload;
    },
    changePassword: (state, action) => {
      state.user1.password = action.payload;
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userList = action.payload;
    })
    .addCase(getUser.pending, (state, action) =>{
      state.isLoading = false;
    })
    .addCase(getUser.rejected, (state, action) =>{
      state.error = action.payload;
    })
  }
});

export const { changeUsername, changeAge, changePassword } = userSlice.actions;
export {getUser};
export default userSlice.reducer;
