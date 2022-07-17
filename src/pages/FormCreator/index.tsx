import React from 'react';
import { Space } from 'antd';

import ResultForm from 'components/ResultForm';
import FormFieldModal from 'components/FormFieldModal';
import Download from 'components/Download';

import './index.css';

const FormCreatorPage = () => {
  return (
    <div className="formCreatorPage">
      <Space direction="vertical">
        <h1>Form creator</h1>
        <ResultForm />
        <Space>
          <Download />
          <FormFieldModal />
        </Space>
      </Space>
    </div>
  );
};

export default FormCreatorPage;
