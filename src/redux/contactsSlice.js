import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from "./constants";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(item) {
        return {
          payload: {
            ...item,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
