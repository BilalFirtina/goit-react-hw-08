import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// API base URL ayarı
axios.defaults.baseURL = "https://connections-api.goit.global/";

// Header yönetimi
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

// Register
export const register = createAsyncThunk(
  "auth/register",
  async (cred, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", cred);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Login
export const login = createAsyncThunk("auth/login", async (cred, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", cred);
    setAuthHeader(data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// Logout
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// Refresh
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (!token) return thunkAPI.rejectWithValue("No token");

    try {
      setAuthHeader(token);
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      if (error.response?.status === 401) {
        clearAuthHeader();
        return thunkAPI.rejectWithValue("Unauthorized");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
