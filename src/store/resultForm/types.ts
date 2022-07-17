import React from 'react';
import {
  FieldTypes,
  TButton,
  TCheckboxField,
  TInputField,
  TSelectField,
} from 'store/editModal/types';

export const RESULT_FORM_ALIAS = 'resultForm' as const;

export type TFormItem = (
  | TInputField
  | TSelectField
  | TCheckboxField
  | TButton
) & {
  id: string;
  fieldType: FieldTypes;
};

export interface IResultForm {
  dataSource: TFormItem[] | null;
}

export type TResultFormContext = { editable?: boolean };
export const ResultFormContext = React.createContext<TResultFormContext | null>(
  null,
);
