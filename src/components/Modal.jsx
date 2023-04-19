import React from "react";
import { GlobalFormContext } from "../context/FormContext";
import Button from "./Button";

const Modal = () => {
  const { closeModal, postMessage } = GlobalFormContext();
  return (
    <div className="form-container form-small">
      <h3>{postMessage}</h3>
      <p>You submitted the dish details. Thank you!</p>
      <Button onClick={closeModal} name="Close" />
    </div>
  );
};

export default Modal;
