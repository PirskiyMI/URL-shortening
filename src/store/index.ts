import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';
import errorReducer from './slices/authErrorSlice';
import linkReducer from './slices/linkSlice';

const rootReducer = combineReducers({
   userReducer,
   modalReducer,
   errorReducer,
   linkReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
