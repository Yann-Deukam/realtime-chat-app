import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Notifications = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
};

export default Notifications;
