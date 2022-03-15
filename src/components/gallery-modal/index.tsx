import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const GalleryModal = ({
  isModalVisible,
  triggerModal,
}: {
  isModalVisible: boolean;
  triggerModal: (status: boolean) => void;
}) => {
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };
  //
  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };
  //
  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={() => triggerModal(!isModalVisible)}
        onOk={() => triggerModal(!isModalVisible)}
        maskClosable={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default GalleryModal;
