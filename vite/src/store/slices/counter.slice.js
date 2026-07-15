import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk(
    "counter/incrementAsync",
    async () => {
     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
     return res.data;
    }
);

const counterSlice = createSlice({
    name: "counter",
    initialState: {
      count: 0,
      userName: "",
      age: "",
      phone: "",
    },
    // action creators
    reducers: {
      increment: (state) => {
        state.count += 1;
      },
      decrement: (state) => {
        state.count -= 1;
      },
      changeName: (state, action) => {
        console.log(action.payload)
        state.userName = action.payload;
      },
      changeAge: (state, action) => {
        state.age = action.payload;
      },
      changePhone: (state, action) => {
        state.phone = action.payload;
      },
    },
})


export const { increment, decrement, changeName, changeAge, changePhone } = counterSlice.actions
export default counterSlice.reducer