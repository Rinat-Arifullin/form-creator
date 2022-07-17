import React, { useContext } from 'react';
import { Button, Form, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { FieldTypes, TButton } from 'store/editModal/types';
import { useDispatch } from 'react-redux';
import { setModalInitValue } from 'store/editModal/slice';
import { deleteResultItem } from 'store/resultForm/slice';
import { ResultFormContext, TResultFormContext } from 'store/resultForm/types';

type TProps = TButton & { id: string; fieldType: FieldTypes };

const ButtonItem = ({ text, fieldType, id }: TProps) => {
  const { editable } = useContext(ResultFormContext) as TResultFormContext;
  const dispatch = useDispatch();
  const onEditField = () => {
    const initValue: TProps = {
      id,
      text,
      fieldType,
    };

    dispatch(setModalInitValue(initValue));
  };

  const onDeleteField = () => {
    dispatch(deleteResultItem(id));
  };

  return (
    <Form.Item>
      <Space>
        <Button>{text}</Button>
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

export default ButtonItem;
