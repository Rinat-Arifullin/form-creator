import React from 'react';
import { Form, Input } from 'antd';

const ButtonField = () => {
  return (
    <Form.Item name="text" label="Text">
      <Input allowClear />
    </Form.Item>
  );
};

export default ButtonField;
