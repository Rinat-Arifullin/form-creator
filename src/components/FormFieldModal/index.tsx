/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, Input, Modal, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';

import { FieldTypes } from 'store/editModal/types';
import { getModaInitValue } from 'store/editModal/selectors';
import { setModalInitValue } from 'store/editModal/slice';
import { getResultFormDataSource } from 'store/resultForm/selectors';
import { addResultItem, setResultFormDataSource } from 'store/resultForm/slice';
import { TFormItem } from 'store/resultForm/types';

import InputFields from './InputField';
import SelectFields from './SelectField';
import CheckboxFields from './CheckboxField';
import ButtonField from './ButtonField';

const FormFieldModal = () => {
  const dispatch = useDispatch();

  const initModalValue = useSelector(getModaInitValue);
  const formResultDataSource = useSelector(getResultFormDataSource);

  const [fieldType, setFieldType] = useState<FieldTypes>(FieldTypes.Text);
  const [form] = Form.useForm();

  const onChangeFieldTypeHandler = (value) => {
    setFieldType(value);
  };

  const saveHandler = async () => {
    const values = await form.validateFields();
    if (values.id) {
      const newDataSource: TFormItem[] | null =
        formResultDataSource?.map((item) => {
          if (item.id === values.id) {
            return { ...values };
          }
          return item;
        }) || null;

      dispatch(setResultFormDataSource(newDataSource));
      dispatch(setModalInitValue(null));
      return;
    }
    dispatch(addResultItem({ ...values, id: uuidv4() }));
    dispatch(setModalInitValue(null));
  };

  const onCloseModal = () => {
    form.resetFields();
    dispatch(setModalInitValue(null));
  };

  const onAddField = () => {
    form.resetFields();
    dispatch(
      setModalInitValue({
        fieldType: FieldTypes.Button,
        id: null,
        text: 'Button text',
      }),
    );
  };

  useEffect(() => {
    form.setFieldsValue(initModalValue);
    if (initModalValue) {
      setFieldType((initModalValue as TFormItem).fieldType);
    }
  }, [initModalValue]);

  return (
    <>
      <Button type="primary" onClick={onAddField}>
        Add field
      </Button>
      <Modal
        visible={Boolean(initModalValue)}
        onCancel={onCloseModal}
        onOk={saveHandler}
        destroyOnClose
      >
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          layout="horizontal"
          form={form}
        >
          <Form.Item name="id" noStyle hidden>
            <Input />
          </Form.Item>
          <Form.Item name="fieldType" label="Field type">
            <Select defaultValue="input" onChange={onChangeFieldTypeHandler}>
              <Select.Option value={FieldTypes.Text} key={FieldTypes.Text}>
                Text
              </Select.Option>
              <Select.Option value={FieldTypes.Select} key={FieldTypes.Select}>
                Select
              </Select.Option>
              <Select.Option
                value={FieldTypes.Checkbox}
                key={FieldTypes.Checkbox}
              >
                Checkbox
              </Select.Option>
              <Select.Option value={FieldTypes.Button} key={FieldTypes.Button}>
                Button
              </Select.Option>
            </Select>
          </Form.Item>

          {fieldType === FieldTypes.Text && <InputFields />}
          {fieldType === FieldTypes.Select && <SelectFields />}
          {fieldType === FieldTypes.Checkbox && <CheckboxFields />}
          {fieldType === FieldTypes.Button && <ButtonField />}
        </Form>
      </Modal>
    </>
  );
};

export default FormFieldModal;
