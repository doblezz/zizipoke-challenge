import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import counterReducer from './authReducer';

const persistConfig = {
    key: 'isLogged',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

