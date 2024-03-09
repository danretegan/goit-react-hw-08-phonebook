import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filterSlice';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

/**
 * In store, pentru fiecare "particica" din state-ul aplicatiei, o sa asignam un reducer care se va ocupa exclusiv de logica pentru acea "particica".
 *
 * Obiectul de state va fi:
 * {
 * contacts: [...lista de contacte],
 * filter: "", // termenul de căutare pentru filtrarea contactelor
 * }
 */

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // se memoreaza in local storage doar contactele.
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
