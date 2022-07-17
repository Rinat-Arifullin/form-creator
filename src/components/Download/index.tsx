import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Provider } from 'react-redux';

import { store } from 'store';

import ResultForm from 'components/ResultForm';

const Download = () => {
  const [visiblePreview, setVisiblePreview] = useState(false);

  const onDownloadAsHtml = () => {
    const newDoc = document.implementation.createHTMLDocument(
      'Result Form Document',
    );
    const styles = document.getElementsByTagName('style');
    const resultFormElement = document.getElementById('resultFormPreview');
    for (let i = 0; i < styles.length; i += 1) {
      const style = document.createElement('style');
      style.innerHTML = styles[i].innerHTML;
      newDoc.head.append(style);
    }
    if (resultFormElement) {
      newDoc.body.append(resultFormElement.cloneNode(true));
    }

    newDoc.head.append();
    const blob = new Blob([new XMLSerializer().serializeToString(newDoc)], {
      type: 'text/html;charset=utf-8',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'Result Form';
    a.click();
  };

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
