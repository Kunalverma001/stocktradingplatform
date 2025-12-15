import { useRef,useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./ToastMessage.css";

export default function ToastMessage({
  message,
  type = "Success",
  show,
  onClose,
}) {
  const toastRef = useRef(null);

  useEffect(() => {
    if (show && toastRef.current) {
      const toast = new bootstrap.Toast(toastRef.current);
      toast.show();

      toastRef.current.addEventListener("hidden.bs.toast", () => {
        onClose && onClose();
      });
    }
  }, [show]);
  return (
    <div
      className="toast-container "
    >
      <div
        ref={toastRef}
        className={`toast text-bg-${type}`}
        role="alert"
      >
        <div className="">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="toast"
          ></button>
        </div>
      </div>
    </div>
  );
}
