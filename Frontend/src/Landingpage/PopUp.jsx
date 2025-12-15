import "./PopUp.css";
import { useEffect, useState } from "react";

export function openMainPopup() {
  localStorage.removeItem("hide_main_popup");
  window.dispatchEvent(new Event("show_main_popup"));
}

export default function PopUp() {
  const [show, setShow] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    window.addEventListener("show_main_popup", () => {
      setShow(true);
    });

    return () => {
      window.removeEventListener("show_main_popup", () => {});
    };
  }, []);


  useEffect(() => {
    const flag = localStorage.getItem("hide_main_popup");
    if (!flag) setShow(true);
  }, []);

  function closePopup() {
    if (dontShow) {
      localStorage.setItem("hide_main_popup", "1");
    }
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
            <div className="popup-left">
              <div className="popup-avatar">
                <img src="/media/Kunal.jpg" alt="Kunal Verma" />
              </div>
              <p className="popup-madeby">Made by Kunal Verma</p>
            </div>

            <div className="popup-right">
              <h2 className="popup-title">
                Welcome to <span>ZeroTrade</span>
              </h2>

              <p className="popup-message">
                This main website is a <b>frontend showcase</b> of a trading
                platform. All real backend-powered features — buying, selling,
                funds, analytics — are available inside the{" "}
                <b>interactive dashboard</b>.
              </p>

              <p className="popup-sub">Where would you like to continue?</p>

              <div className="popup-buttons">
                <a
                  href="/"
                  className="btn-pill btn-ghost"
                  onClick={(e) => {
                    closePopup();
                    e.preventDefault();
                  }}
                >
                  Explore Website
                </a>
                <a
                  href={`${import.meta.env.VITE_DASHBOARD_URL}`}
                  className="btn-pill btn-primary"
                >
                  Explore Dashboard
                </a>
              </div>

              <div className="popup-footer">
                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => setDontShow(e.target.checked)}
                  />
                  <span>Don't show again</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
