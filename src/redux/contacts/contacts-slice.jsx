import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "redux/auth/operations";


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contactItems: [],
        isLoading: false,
        error: null,
    },

    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,

        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contactItems = action.payload;
        },

        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contactItems.push(action.payload);
        },

        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.contactItems.findIndex(
                contact => contact.id === action.payload.id
            );
            state.contactItems.splice(index, 1)
        },

        [logOut.fulfilled](state) {
            state.contactItems = [];
            state.isLoading = false;
            state.error = null;
        }
    }
});

export const contactsReducer = contactsSlice.reducer;