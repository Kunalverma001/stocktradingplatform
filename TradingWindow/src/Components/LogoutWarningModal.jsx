import ReactDOM from "react-dom";
import "./LogoutWarningModal.css";

export default function LogoutWarningModal({ onConfirm, onCancel }) {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Important Notice</h3>

        <p>
          If you do not log back in within <b>5 days</b>, your:
        </p>

        <ul>
          <li>Holdings</li>
          <li>Positions</li>
          <li>Orders</li>
          <li>Funds</li>
        </ul>

        <p className="warning-text">This data will be permanently deleted.</p>

        <div className="modal-actions">
          <button onClick={onCancel}>Cancel</button>
          <button className="danger" onClick={onConfirm}>
            Logout Anyway
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // 🔥 KEY LINE
  );
}