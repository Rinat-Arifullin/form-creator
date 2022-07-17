import React, { useContext } from 'react';
import { Form, Space, Input, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { FieldTypes, TInputField } from 'store/editModal/types';
import { useDispatch } from 'react-redux';
import { setModalInitValue } from 'store/editModal/slice';
import { deleteResultItem } from 'store/resultForm/slice';
import { TResultFormContext, ResultFormContext } from 'store/resultForm/types';

type TProps = TInputField & { id: string; fieldType: FieldTypes };

const InputItem = ({
  id,
  inputType,
  label,
  name,
  placeHolder,
  required,
  fieldType,
}: TProps) => {
  const { editable } = useContext(ResultFormContext) as TResultFormContext;

  const dispatch = useDispatch();
  const onEditField = () => {
    const initValue: TProps = {
      id,
      inputType,
      label,
      name,
      placeHolder,
      required,
      fieldType,
    };

    dispatch(setModalInitValue(initValue));
  };

  const onDeleteField = () => {
    dispatch(deleteResultItem(id));
  };

  return (
    <Form.Item name={name} label={label} required={required}>
      <Space className="flex space-between">
        <Input
          className="width"
          placeholder={placeHolder}
          name={name}
          type={inputType}
        />
        {editable && (
          <Space>
            <Button
              type="primary"
              icon={<EditOutlined />}
              onClick={onEditField}
            />
            <Button danger icon={<DeleteOutlined />} onClick={onDeleteField} />
          </Space>
        )}
      </Space>
    </Form.Item>
  );
};

export default InputItem;
