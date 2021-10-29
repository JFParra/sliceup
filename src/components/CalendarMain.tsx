// @flow
import React from "react";
import "antd/dist/antd.css";
import "../scss/CalendarMain.scss";
import { Modal, Button } from "antd";
import TimeForm from "./TimeForm";

export const CalendarMain = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div className="center">
      <Button type="primary" onClick={showModal}>
        Time and Date Options
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={"80"}
      >
        <TimeForm />
      </Modal>
    </div>
  );
};
