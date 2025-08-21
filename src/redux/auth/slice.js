import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const fulfilled = (state, action) => {
  const { user, token } = action.payload || {};
  state.user = user ?? { name: null, email: null };
  state.token = token ?? null;
  state.isLoggedIn = Boolean(user && token);
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, fulfilled)
      .addCase(login.fulfilled, fulfilled)
      .addCase(logout.fulfilled, (s) => {
        s.user = { name: null, email: null };
        s.token = null;
        s.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (s, a) => {
        s.user = a.payload;
        s.isLoggedIn = true;
        s.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (s) => {
        s.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
