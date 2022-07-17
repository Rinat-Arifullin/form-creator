import { RootState } from 'store';

export const getModaInitValue = (state: RootState) =>
  state.editModal.initalValue;
