import React from 'react';
import { Checkbox, Form, Input, Select } from 'antd';
import { InputTypes } from 'store/editModal/types';

const InputFields = () => {
  return (
    <>
      <Form.Item name="inputType" label="Input type">
        <Select>
          <Select.Option value={InputTypes.Text} key={InputTypes.Text}>
            Text
          </Select.Option>
          <Select.Option value={InputTypes.Email} key={InputTypes.Email}>
            Email
          </Select.Option>
          <Select.Option value={InputTypes.Phone} key={InputTypes.Phone}>
            Phone
          </Select.Option>
          <Select.Option value={InputTypes.Number} key={InputTypes.Number}>
            Number
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="name" label="Name">
        <Input allowClear />
      </Form.Item>
      <Form.Item name="label" label="Label">
        <Input allowClear />
      </Form.Item>
      <Form.Item name="required" valuePropName="checked" label="Required">
        <Checkbox />
      </Form.Item>
      <Form.Item name="placeHolder" label="Placeholder">
        <Input allowClear />
      </Form.Item>
    </>
  );
};

export default InputFields;
