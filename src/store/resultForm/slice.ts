import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FieldTypes, InputTypes } from 'store/editModal/types';
import { v4 as uuidv4 } from 'uuid';

import { IResultForm, RESULT_FORM_ALIAS, TFormItem } from './types';

const initialState: IResultForm = {
  dataSource: [
    {
      id: uuidv4(),
      inputType: InputTypes.Text,
      fieldType: FieldTypes.Text,
      label: 'Text label',
      name: 'Name',
      placeHolder: 'Place holder',
      required: true,
    },
    {
      fieldType: FieldTypes.Select,
      id: uuidv4(),
      label: 'Text label',
      name: 'Name',
      options: [],
      required: true,
    },
    {
      fieldType: FieldTypes.Checkbox,
      id: uuidv4(),
      label: 'Text label',
      name: 'Name',
      required: true,
    },
    {
      fieldType: FieldTypes.Button,
      id: uuidv4(),
      text: 'Text',
    },
  ],
};

export const resultFormSlice = createSlice({
  name: RESULT_FORM_ALIAS,
  initialState,
  reducers: {
    setResultFormDataSource: (
      state,
      { payload }: PayloadAction<IResultForm['dataSource']>,
    ) => {
      state.dataSource = payload;
    },
    deleteResultItem: (state, { payload }: PayloadAction<string>) => {
      state.dataSource =
        state.dataSource?.filter((field) => field.id !== payload) || null;
    },
    addResultItem: (state, { payload }: PayloadAction<TFormItem>) => {
      state.dataSource?.push(payload);
    },
  },
});

export const { setResultFormDataSource, deleteResultItem, addResultItem } =
  resultFormSlice.actions;

export default resultFormSlice.reducer;
