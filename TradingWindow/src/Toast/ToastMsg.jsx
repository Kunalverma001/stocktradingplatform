import "./ToastMsg.css";

import { useEffect, useRef } from "react";
import { Toast } from "bootstrap";

export default function ToastMsg({ message, type, show }) {
  const toastRef = useRef(null);

  useEffect(() => {
    if (show) {
      const toast = new Toast(toastRef.current);
      toast.show();

      setTimeout(() => {
        if (onclose) onclose();
      }, 2000);
    }
  }, [show]);

  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        ref={toastRef}
        className={`toast text-white bg-${type}`}
        role="alert"
      >
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}
