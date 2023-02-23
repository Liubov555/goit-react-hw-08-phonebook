import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";


// GET @ /contatcs

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// POST @ /contatcs

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', {
                name,
                number
            });
            return response.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);

// DELETE @ /contatcs/:id

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${id}`);
            return response.data;
        } catch (evt) {
            return thunkAPI.rejectWithValue(evt.message);
        }
    }
);

