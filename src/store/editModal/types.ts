import { TFormItem } from 'store/resultForm/types';
import { OptionProps } from 'antd/lib/select';

export const MODAL_FORM_ALIAS = 'resultForm' as const;

export interface IEditModal {
  initalValue: TFormItem | {} | null;
}

export type TBaseField = {
  name: string;
  label: string;
  required: boolean;
};

export enum InputTypes {
  Text = 'text',
  Email = 'email',
  Phone = 'phone',
  Number = 'number',
}

export type TInputField = TBaseField & {
  inputType: InputTypes;
  placeHolder: string;
};

export type TSelectField = TBaseField & {
  options: OptionProps[];
};

export type TCheckboxField = TBaseField;

export type TButton = {
  text: string;
};

export enum FieldTypes {
  Select = 'select',
  Text = 'input',
  Checkbox = 'checkbox',
  Button = 'button',
}

export const isInputField = (value: unknown): value is TInputField =>
  typeof value === 'object' &&
  (value as TFormItem).fieldType === FieldTypes.Text;

export const isSelectField = (value: unknown): value is TSelectField =>
  typeof value === 'object' &&
  (value as TFormItem).fieldType === FieldTypes.Select;

export const isCheckboxField = (value: unknown): value is TCheckboxField =>
  typeof value === 'object' &&
  (value as TFormItem).fieldType === FieldTypes.Checkbox;

export const isButtonField = (value: unknown): value is TButton =>
  typeof value === 'object' &&
  (value as TFormItem).fieldType === FieldTypes.Button;
