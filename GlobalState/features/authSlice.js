"use client";

import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    User: null,
    loading: false,
    error: false,
    token: "",
  },

  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = true;
      toast.error(action.payload, {
        style: { width: "auto", height: "auto" },
      });
    },
    logIn: (state, action) => {
      state.loading = false;
      state.User = action.payload.user;
      state.token = action.payload.token;
      toast.success("Login Successful 🎉", {
        style: { width: "auto", height: "auto" },
      });
    },
    signUp: (state, action) => {},
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setLoading, setError, logIn, signUp, logOut } =
  authSlice.actions;
export default authSlice.reducer;
