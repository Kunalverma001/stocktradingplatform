import { useEffect, useState } from "react";
import "./Toast.css";

export default function Toast() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    function handleToast(e) {
      setMessage(e.detail || "Feature coming soon 🚀");
      setShow(true);

      setTimeout(() => setShow(false), 2500);
    }

    window.addEventListener("show-toast", handleToast);
    return () => window.removeEventListener("show-toast", handleToast);
  }, []);

  if (!show) return null;

  return <div className="toast-popup">{message}</div>;
}
