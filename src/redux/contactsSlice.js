import { createSlice } from '@reduxjs/toolkit';

const getContactFromLocalStorage = () => {
  let localContacts = [];
  try {
    localContacts = JSON.parse(localStorage.getItem('contacts'));
  } catch (error) {
    console.error('Error: ', error);
  }

  if (localContacts?.length > 0) {
    return localContacts;
  } else return [];
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
