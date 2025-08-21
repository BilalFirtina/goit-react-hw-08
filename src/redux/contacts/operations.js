import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/contacts");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/contacts", body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
