import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const register = createAsyncThunk("auth/register", async ({email, password}) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
});


const login = createAsyncThunk("auth/login", async ({email, password}) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false,
      state.isAuthenticated = true,
      state.user = action.payload,
      state.error = null;
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false,
      state.isAuthenticated = false,
      state.user = null,
      state.error = action.payload;
    })
    .addCase(register.pending, (state) => {
      state.loading = true,
      state.isAuthenticated = false,
      state.user = null,
      state.error = null;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false,
      state.isAuthenticated = true,
      state.user = action.payload,
      state.error = null;
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false,
      state.isAuthenticated = false,
      state.user = null,
      state.error = action.payload;
    })
    .addCase(login.pending, (state) => {
      state.loading = true,
      state.isAuthenticated = false,
      state.user = null,
      state.error = null;
    });
  }
});

export {register, login};
export default authSlice.reducer;
