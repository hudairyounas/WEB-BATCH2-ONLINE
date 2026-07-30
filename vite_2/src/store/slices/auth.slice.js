import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../config/firebase";
import { addDoc, collection, getDoc, getDocs, query, where } from "firebase/firestore";

const register = createAsyncThunk(
  "auth/register",
  async ({ fullName, email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await addDoc(collection(db, "users"), {
      uid: userCredential.user.uid,
      fullName,
      email,
      createdAt: new Date().toLocaleDateString(),
    });

    const user = userCredential.user;
    return user;
  },
);

const login = createAsyncThunk("auth/login", async ({ email, password }) => {
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

const fetchCurrent = () => (dispatch) => {
  dispatch(setLoading(true));
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("user => ", user)
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q)
      let userProfile = {}
      querySnapshot.forEach((doc) => {
        userProfile = { id: doc.id, ...doc.data() }
      })
      console.log("userProfile => ", userProfile)
      dispatch(setUser(userProfile));
    } else {
      dispatch(logout());
    }
  });
  return unsubscribe;
};

const doLogout = createAsyncThunk("auth/logout", async () => {
  try {
    await signOut(auth);
  } catch (error) {
    return error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        ((state.loading = false),
          (state.isAuthenticated = true),
          (state.user = action.payload),
          (state.error = null));
      })
      .addCase(register.rejected, (state, action) => {
        ((state.loading = false),
          (state.isAuthenticated = false),
          (state.user = null),
          (state.error = action.payload));
      })
      .addCase(register.pending, (state) => {
        ((state.loading = true),
          (state.isAuthenticated = false),
          (state.user = null),
          (state.error = null));
      })
      .addCase(login.fulfilled, (state, action) => {
        ((state.loading = false),
          (state.isAuthenticated = true),
          (state.user = action.payload),
          (state.error = null));
      })
      .addCase(login.rejected, (state, action) => {
        ((state.loading = false),
          (state.isAuthenticated = false),
          (state.user = null),
          (state.error = action.payload));
      })
      .addCase(login.pending, (state) => {
        ((state.loading = true),
          (state.isAuthenticated = false),
          (state.user = null),
          (state.error = null));
      });
  },
});

export { register, login, fetchCurrent, doLogout };
export const { setLoading, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
