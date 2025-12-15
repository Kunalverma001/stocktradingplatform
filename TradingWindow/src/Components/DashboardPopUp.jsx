import "./DashboardPopUp.css";
import { useEffect, useState } from "react";

export function openDashboardIntro() {
  localStorage.removeItem("hide_dashboard_intro");
  window.dispatchEvent(new Event("show_dashboard_intro"));
}

export default function DashboardIntroPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(true);
    window.addEventListener("show_dashboard_intro", handler);

    return () => {
      window.removeEventListener("show_dashboard_intro", handler);
    };
  }, []);

  // Auto-show once after signup / first login
  useEffect(() => {
    const hidden = localStorage.getItem("hide_dashboard_intro");
    if (!hidden) setShow(true);
  }, []);

  function closePopup() {
    localStorage.setItem("hide_dashboard_intro", "1");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="popup-inner">
          <button className="popup-close" onClick={closePopup}>
            ✕
          </button>

          <div className="popup-content">
            {/* LEFT */}
            <div className="popup-left">
              <div className="popup-avatar">
                <img src="/media/Kunal.jpg" alt="Dashboard" />
              </div>
              <p className="popup-madeby">Dashboard Guide</p>
            </div>

            {/* RIGHT */}
            <div className="popup-right">
              <h2 className="popup-title">
                Welcome to your <span>Dashboard</span>
              </h2>

              <p className="popup-message">
                This is your <b>trading control center</b>. Track investments,
                manage funds, and place trades — all in one place.
              </p>

              <ul className="popup-message">
                <li>📈 Monitor holdings & P&L</li>
                <li>💰 Manage funds & margins</li>
                <li>🛒 Buy & sell from watchlist</li>
                <li>🔍 Search for stocks in watchlist</li>
                <li>📊 Review positions & orders</li>
                <li>⭐ Use the star anytime to reopen this guide</li>
              </ul>

              <div className="popup-buttons">
                <button className="btn-pill btn-primary" onClick={closePopup}>
                  Got it, let’s trade 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
