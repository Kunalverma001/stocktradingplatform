import { useState } from "react";
import axios from "axios";
import ToastMsg from "../Toast/ToastMsg";
import { useAuth } from "../src/Context/AuthContext";
import "./Auth.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        form
      );

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("auth_token", res.data.token);

      setToast({
        show: true,
        message: res.data.message,
        type: "success",
      });

      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);

      window.location.href = `${import.meta.env.VITE_DASHBOARD_URL}`;
    } catch (err) {
      setToast({
        show: true,
        message: err.response?.data?.message || "Login failed!",
        type: "danger",
      });
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);
    }
  };

  return (
    <>
      <ToastMsg show={toast.show} message={toast.message} type={toast.type} />
      <h2 className="form-title">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="auth-btn">Login</button>

        <p className="auth-bottom-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </>
  );
}
