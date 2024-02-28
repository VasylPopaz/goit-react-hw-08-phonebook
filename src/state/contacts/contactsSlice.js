import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './contactsOperations';
import { logOut } from 'state';

const initialState = {
  items: [],
  filter: '',
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addCase(logOut.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled,
          updateContact.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      );
  },
});
export const { changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
