import { notification } from 'antd';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import setAxiosDefaults from '../setAxiosDefaults';

setAxiosDefaults();

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const openNotification = (type, message) => {
  notification[type]({
    message,
  });
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      openNotification('error', 'Registration failed. Please try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      openNotification('error', 'Login failed. Please check your credentials.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');

    // După deconectare, elimină token-ul din localStorage și curăță header-ul de autorizare:
    localStorage.removeItem('token');
    console.log('Token removed from localStorage');
    openNotification('success', 'Successfully logged out.');
    clearAuthHeader(); // Curața header-ul
  } catch (error) {
    openNotification('error', 'Logout failed. Please try again.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      openNotification('error', 'Unable to fetch user. Please log in.');
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      openNotification('error', 'Unable to fetch user details. Please log in.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
