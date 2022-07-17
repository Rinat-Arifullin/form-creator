/* eslint-disable object-curly-newline */
import React from 'react';
import { Checkbox, Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const SelectFields = () => {
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
      <Form.List name="options">
        {(fields, { add, remove }) => (
          <>
            <h4>Options</h4>
            {fields.map(({ key, name, ...restField }) => (
              <Space
                key={key}
                style={{ display: 'flex', marginBottom: 8 }}
                align="baseline"
              >
                <Form.Item {...restField} name={[name, 'value']} label="Value">
                  <Input placeholder="Value" />
                </Form.Item>
                <Form.Item {...restField} name={[name, 'text']} label="Text">
                  <Input placeholder="Text" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add option
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </>
  );
};

export default SelectFields;
