import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IError {
   error: string | null;
}

const initialState: IError = {
   error: null,
};

const authErrorSlice = createSlice({
   name: 'error',
   initialState,
   reducers: {
      setError(state, action: PayloadAction<string>) {
         state.error = action.payload;
      },
      removeError(state) {
         state.error = null;
      },
   },
});

export const { setError, removeError } = authErrorSlice.actions;
export default authErrorSlice.reducer;
