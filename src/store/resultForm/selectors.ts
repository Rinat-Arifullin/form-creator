import { RootState } from 'store';

export const getResultFormDataSource = (state: RootState) =>
  state.resultForm.dataSource;
