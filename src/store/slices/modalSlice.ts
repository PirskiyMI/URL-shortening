import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
   loginModal: false,
   registrationModal: false,
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      setLoginModal(state, action: PayloadAction<boolean>) {
         state.loginModal = action.payload;
      },
      setRegistrationModal(state, action: PayloadAction<boolean>) {
         state.registrationModal = action.payload;
      },
   },
});

export const { setLoginModal, setRegistrationModal } = modalSlice.actions;
export default modalSlice.reducer;
