import { createSlice } from '@reduxjs/toolkit';

const getContactFromLocalStorage = () => {
  const localContacts = localStorage.getItem('contacts');

  if (!localContacts) return [];

  try {
    return JSON.parse(localContacts);
  } catch (error) {
    console.error('Error: ', error);
  }
};

const contactsInitialState = getContactFromLocalStorage();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },

    setContacts: (state, action) => {
      state = action.payload;
    },

    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, setContacts, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
