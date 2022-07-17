import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Select, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { FieldTypes, TSelectField } from 'store/editModal/types';
import { setModalInitValue } from 'store/editModal/slice';
import { deleteResultItem } from 'store/resultForm/slice';
import { ResultFormContext, TResultFormContext } from 'store/resultForm/types';

type TProps = TSelectField & { id: string; fieldType: FieldTypes };

const SelectItem = ({
  label,
  name,
  options,
  required,
  id,
  fieldType,
}: TProps) => {
  const { editable } = useContext(ResultFormContext) as TResultFormContext;

  const dispatch = useDispatch();
  const onEditField = () => {
    const initValue: TProps = {
      id,
      label,
      name,
      required,
      options,
      fieldType,
    };
    dispatch(setModalInitValue(initValue));
  };

  const onDeleteField = () => {
    dispatch(deleteResultItem(id));
  };

  return (
    <Form.Item name={name} label={label} required={required}>
      <Space>
        <Select className="width">
          {options.map((option) => (
            <Select.Option value={option.value} key={option.key}>
              {option.text}
            </Select.Option>
          ))}
        </Select>
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

export default SelectItem;
