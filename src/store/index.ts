import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';
import errorReducer from './slices/authErrorSlice';
import { shortenApi } from '../api/shortenApi';

const rootReducer = combineReducers({
   userReducer,
   modalReducer,
   errorReducer,
   [shortenApi.reducerPath]: shortenApi.reducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shortenApi.middleware),
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
