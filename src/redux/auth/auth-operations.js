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

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to signup. Please try again.',
      });
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
      notification.error({
        message: 'Error',
        description: 'Failed to login. Please try again.',
      });
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
    notification.success({
      message: 'Success',
      description: 'Successfully logged out.',
    });
    clearAuthHeader(); // Curața header-ul
  } catch (error) {
    notification.error({
      message: 'Error',
      description: 'Failed to logout. Please try again.',
    });
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to fetch user details. Please log in again.',
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
