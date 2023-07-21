import React from "react";
import modalStyle from "./Modal.module.scss";

const Modal = ({title}) => {
  return (
    <div className={modalStyle.modal}>
      <h4>{title}</h4>
      <p>date</p>
      <p>content</p>
    </div>
  );
};

export default Modal;
