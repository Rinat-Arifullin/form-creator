/* eslint-disable object-curly-newline */
import React, { useMemo } from 'react';
import { Form } from 'antd';
import { useSelector } from 'react-redux';

import { getResultFormDataSource } from 'store/resultForm/selectors';
import { ResultFormContext } from 'store/resultForm/types';

import './index.css';
import FormItem from './FormItem';

type TProps = {
  editable?: boolean;
};

const ResultForm = ({ editable = true }: TProps) => {
  const formDataSource = useSelector(getResultFormDataSource);
  const [form] = Form.useForm();

  const initContext = useMemo(() => ({ editable }), [editable]);

  return (
    <Form
      form={form}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout="horizontal"
      className="resultForm"
    >
      <ResultFormContext.Provider value={initContext}>
        {formDataSource?.map((field) => {
          return <FormItem key={field.id} {...field} />;
        })}
      </ResultFormContext.Provider>
    </Form>
  );
};

export default ResultForm;
