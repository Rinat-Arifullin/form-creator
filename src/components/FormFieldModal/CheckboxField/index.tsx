import React from 'react';
import { Checkbox, Form, Input } from 'antd';

const CheckboxFields = () => {
  return (
    <>
      <Form.Item name="name" label="Name">
        <Input allowClear />
      </Form.Item>
      <Form.Item name="label" label="Label">
        <Input allowClear />
      </Form.Item>
      <Form.Item name="required" valuePropName="checked" label="Required">
        <Checkbox />
      </Form.Item>
    </>
  );
};

export default CheckboxFields;
