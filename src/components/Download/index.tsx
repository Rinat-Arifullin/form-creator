import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Provider } from 'react-redux';

import { store } from 'store';

import ResultForm from 'components/ResultForm';

const Download = () => {
  const [visiblePreview, setVisiblePreview] = useState(false);

  const onDownloadAsHtml = () => {};

  return (
    <>
      <Button onClick={() => setVisiblePreview(true)}>Download</Button>
      <Modal
        title="Preview form"
        visible={visiblePreview}
        onCancel={() => setVisiblePreview(false)}
        okText="Download"
        onOk={onDownloadAsHtml}
      >
        <Provider store={store}>
          <div id="resultFormPreview">
            <ResultForm editable={false} />
          </div>
        </Provider>
      </Modal>
    </>
  );
};

export default Download;
