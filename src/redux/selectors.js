import { createSelector } from '@reduxjs/toolkit';

// Selector pentru a obține lista de contacte:
export const selectContacts = state => state.contacts;

// Selector pentru a obține filtrul:
export const selectFilter = state => state.filter;

// Selector pentru a filtra contactele în funcție de șirul de căutare:
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
