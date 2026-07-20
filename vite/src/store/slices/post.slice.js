import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const addPosts = createAsyncThunk("post/addPosts", async (postData) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), postData);
    return { id: docRef.id, ...postData };
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = [action.payload, ...state.post];
      })
      .addCase(addPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export {addPosts}
export default postSlice.reducer
