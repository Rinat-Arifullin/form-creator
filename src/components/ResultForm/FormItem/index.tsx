import React from 'react';
import {
  FieldTypes,
  isButtonField,
  isCheckboxField,
  isInputField,
  isSelectField,
} from 'store/editModal/types';
import { TFormItem } from 'store/resultForm/types';

import ButtonItem from '../Button';
import CheckboxItem from '../Checkbox';
import InputItem from '../Input';
import SelectItem from '../Select';

const FormItem = ({ ...fields }: TFormItem) => {
  switch (fields.fieldType) {
    case FieldTypes.Text:
      return isInputField(fields) ? (
        <InputItem key={fields.id} {...fields} />
      ) : null;

    case FieldTypes.Select:
      return isSelectField(fields) ? (
        <SelectItem key={fields.id} {...fields} />
      ) : null;
    case FieldTypes.Checkbox:
      return isCheckboxField(fields) ? (
        <CheckboxItem key={fields.id} {...fields} />
      ) : null;
    case FieldTypes.Button:
      return isButtonField(fields) ? (
        <ButtonItem key={fields.id} {...fields} />
      ) : null;
    default:
      return null;
  }
};

export default FormItem;
