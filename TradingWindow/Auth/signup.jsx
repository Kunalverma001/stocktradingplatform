import { useState } from "react";
import axios from "axios";
import ToastMsg from "../Toast/ToastMsg";
import { useAuth } from "../src/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import useDelayedLoader from "../src/Utils/useDelayedLoader";

export default function Signup({setLoading}) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const { setUser } = useAuth();
  const [passwordRules, setPasswordRules] = useState({});
  const { startLoading, stopLoading } = useDelayedLoader(setLoading);

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*]/.test(password),
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      setPasswordRules(validatePassword(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rules = validatePassword(form.password);
    const isStrong = Object.values(rules).every((v) => v === true);

    if (!isStrong) {
      setToast({
        show: true,
        message: "Password is too weak!",
        type: "danger",
      });
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);
    }
  };

  const sendOtp = async (e) => {
    e.preventDefault();

    try {
      startLoading();
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sendotp`,
        {
          email: form.email,
        }
      );

      setToast({
        show: true,
        message: "OTP sent to your email",
        type: "success",
      });
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);
      setStep(2);
    } catch (err) {
      const message = err.response?.data?.message || "Failed to send OTP";

      setToast({
        show: true,
        message,
        type: "danger",
      });

      // If user exists → STOP here
      if (message === "User already exists") return;
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);
    } finally {
      stopLoading();
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/verify-otp`,
        {
          email: form.email,
          otp,
        }
      );
      if (res.data.verified) {
        setToast({
          show: true,
          message: "Email verified",
          type: "success",
        });
        setTimeout(() => {
          setToast((t) => ({ ...t, show: false }));
        }, 1000);
        setEmailVerified(true);
        setStep(3);
      }
    } catch (err) {
      setToast({
        show: true,
        message: "Invalid OTP",
        type: "danger",
      });
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);
    } finally {
      stopLoading();
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!emailVerified) {
      return setToast({
        show: true,
        message: "Please verify email first",
        type: "danger",
      });
    }
    setTimeout(() => {
      setToast((t) => ({ ...t, show: false }));
    }, 1000);

    try {
      startLoading();
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/signup`,
        form
      );
      setToast({
        show: true,
        message: "Account created successflly",
      });
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);
      setForm({ name: "", email: "", password: "" });

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("auth_token", res.data.token);
      
      navigate("/", { replace: true });
      window.location.reload();
    } catch (err) {
      setToast({
        show: true,
        message: "Signup failed",
        type: "danger",
      });
      setTimeout(() => {
        setToast((t) => ({ ...t, show: false }));
      }, 1000);
    } finally {
      stopLoading();
    }
  };

  return (
    <>
      <ToastMsg show={toast.show} message={toast.message} type={toast.type} />
      <h2 className="form-title">Create Account</h2>

      <form onSubmit={handleSubmit}>
        {step == 1 && (
          <>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <button className="auth-btn" onClick={sendOtp}>
              Send OTP
            </button>
          </>
        )}
        {step == 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />

            <button className="auth-btn" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}

        {step == 3 && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <div className="password-checklist">
              <p className={passwordRules.length ? "valid" : "invalid"}>
                ✔ At least 8 characters
              </p>
              <p className={passwordRules.uppercase ? "valid" : "invalid"}>
                ✔ Contains an uppercase letter (A-Z)
              </p>
              <p className={passwordRules.lowercase ? "valid" : "invalid"}>
                ✔ Contains a lowercase letter (a-z)
              </p>
              <p className={passwordRules.number ? "valid" : "invalid"}>
                ✔ Contains a number (0-9)
              </p>
              <p className={passwordRules.special ? "valid" : "invalid"}>
                ✔ Contains a special character (!@#$%)
              </p>
            </div>

            <button className="auth-btn" onClick={handleSignup}>
              Sign Up
            </button>
          </>
        )}

        <p className="auth-bottom-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </>
  );
}
