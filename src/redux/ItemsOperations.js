import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, createContact } from '../Service/service';

export const fetchUsers = createAsyncThunk('contacts/fetchUsers', async () => {
  const response = await getContacts();
  return response.data;
});

export const addUsers = createAsyncThunk('contacts/addUser', async contact => {
  const response = await createContact(contact);
  return response.data;
});

export const deleteUser = createAsyncThunk('contacts/fetchUsers', async id => {
  const response = await getContacts(id);
  return response.data;
});
