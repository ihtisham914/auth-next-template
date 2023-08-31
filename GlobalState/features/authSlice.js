"use client";

import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    logedInUser: null,
  },

  reducers: {
    logIn: (state, action) => {},
    signUp: (state, action) => {},
    logOut: (state, action) => {},
  },
});

export const { logIn, signUp, logOut } = authSlice.actions;
export default authSlice.reducer;
