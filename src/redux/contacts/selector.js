import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selector";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, query) => {
    const q = (query || "").trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(q) ||
        (contact.number ?? "").toLowerCase().includes(q)
    );
  }
);
