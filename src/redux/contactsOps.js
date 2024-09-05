import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('https://66d60c49f5859a7042683993.mockapi.io/contacts');
  return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact) => {
  const response = await axios.post('https://66d60c49f5859a7042683993.mockapi.io/contacts', newContact);
  return response.data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  await axios.delete(`https://66d60c49f5859a7042683993.mockapi.io/contacts/${contactId}`);
  return contactId;
});
