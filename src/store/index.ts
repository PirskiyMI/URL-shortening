import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalReducer from './slices/modalSlice';

const rootReducer = combineReducers({
   userReducer,
   modalReducer,
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
