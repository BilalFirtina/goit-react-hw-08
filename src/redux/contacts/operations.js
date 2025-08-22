import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Sadece bu dosyada kullanılacak axios instance
const contactsAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

// Tüm kişiler
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await contactsAPI.get("/contacts");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Kişi ekleme
export const addContact = createAsyncThunk(
  "contacts/add",
  async (body, thunkAPI) => {
    try {
      const { data } = await contactsAPI.post("/contacts", body);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// Kişi silme
export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, thunkAPI) => {
    try {
      await contactsAPI.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
