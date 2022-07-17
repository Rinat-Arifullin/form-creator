import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEditModal, MODAL_FORM_ALIAS } from './types';

const initialState: IEditModal = {
  initalValue: null,
};

export const editModalSlice = createSlice({
  name: MODAL_FORM_ALIAS,
  initialState,
  reducers: {
    setModalInitValue: (
      state,
      { payload }: PayloadAction<IEditModal['initalValue']>,
    ) => {
      state.initalValue = payload;
    },
  },
});

export const { setModalInitValue } = editModalSlice.actions;
export default editModalSlice.reducer;
