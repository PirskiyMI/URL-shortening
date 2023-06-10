import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';
import errorReducer from './slices/authErrorSlice';
import linkReducer from './slices/linkSlice';
import {
   persistStore,
   persistReducer,
   FLUSH,
   PAUSE,
   PERSIST,
   REGISTER,
   REHYDRATE,
   PURGE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
   key: 'root',
   storage,
};

const rootReducer = combineReducers({
   userReducer,
   modalReducer,
   errorReducer,
   linkReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
   return configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
            serializableCheck: {
               ignoredActions: [FLUSH, PAUSE, PERSIST, REGISTER, REHYDRATE, PURGE],
            },
         }),
   });
};
export const store = setupStore()

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
