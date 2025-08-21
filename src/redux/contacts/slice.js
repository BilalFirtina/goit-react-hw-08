import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchContacts.pending, (s) => {
      s.loading = true;
      s.error = null;
    })
      .addCase(fetchContacts.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload;
      })
      .addCase(fetchContacts.fulfilled, (s, a) => {
        s.loading = false;
        s.items = a.payload;
      })
      .addCase(addContact.fulfilled, (s, a) => {
        s.items.push(a.payload);
      })
      .addCase(deleteContact.fulfilled, (s, a) => {
        s.items = s.items.filter((item) => item.id !== a.payload);
      })
      .addCase(logout.fulfilled, (s) => {
        s.items = [];
        s.error = null;
        s.loading = false;
      });
  },
});

export default contactsSlice.reducer;
