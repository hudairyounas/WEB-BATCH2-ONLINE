import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPosts = createAsyncThunk(
    "counter/incrementAsync",
    async () => {
     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
     return res.data;
    }
);

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
      count: 5,
      userName: "Hudair",
      isLoading: false,
      error: null,
      posts: []
    },
    // action creators
    reducers: {
      increment: (state) => {
        state.count += 1;
      }
    },
    extraReducers: (builder) => {
      builder.addCase(getPosts.fulfilled, (state, action)=> {
        state.posts = action.payload
      }).addCase(getPosts.rejected, (state, action)=> {
        state.error = action.payload
      })
    }
})


export default counterSlice.reducer