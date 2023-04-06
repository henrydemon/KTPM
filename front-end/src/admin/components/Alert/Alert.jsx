import { useEffect } from "react";

const Alert = ({ message, type, handleClose, show, styleTop }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [handleClose]);

  return (
    <div
      className={`alert-${type} animationAlert ${show && "active"}`}
      role="alert"
      style={{ top: styleTop }}
    >
      <strong>{type === "danger" ? "Warning! " : "Success! "}</strong> {message}
    </div>
  );
};

export default Alert;
