import { createSlice, createSelector } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../contacts/contactsOps";
import { selectNameFilter } from "../filters/filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const fulfilled = (state, action) => {
  state.loading = false;
  state.items = action.payload;
};

const pending = (state) => {
  state.loading = true;
  state.error = null;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, fulfilled)
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const selectContacts = (state) => state.contacts.items;
export const selectContactsLoading = (state) => state.contacts.loading;
export const selectContactsError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);

export default contactsSlice.reducer;
