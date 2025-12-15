import { Outlet } from "react-router-dom";
import "./Auth.css";

export default function AuthLayout() {
  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        {/* LEFT SECTION */}
        <div className="auth-left">
          <img
            src="./media/logo.svg"
            className="auth-logo"
          />
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">
            Trade smarter. Manage your investments easily.
          </p>
        </div>

        {/* RIGHT SECTION (FORM) */}
        <div className="auth-right">
          <div className="auth-form-card">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
