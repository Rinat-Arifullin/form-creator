import React, { useContext } from 'react';
import { Button, Checkbox, Form, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { FieldTypes, TCheckboxField } from 'store/editModal/types';
import { useDispatch } from 'react-redux';
import { setModalInitValue } from 'store/editModal/slice';
import { deleteResultItem } from 'store/resultForm/slice';
import { ResultFormContext, TResultFormContext } from 'store/resultForm/types';

type TProps = TCheckboxField & { id: string; fieldType: FieldTypes };

const CheckboxItem = ({ label, required, name, fieldType, id }: TProps) => {
  const { editable } = useContext(ResultFormContext) as TResultFormContext;
  const dispatch = useDispatch();
  const onEditField = () => {
    const initValue: TProps = {
      id,
      label,
      name,
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
        <Checkbox />
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

export default CheckboxItem;
