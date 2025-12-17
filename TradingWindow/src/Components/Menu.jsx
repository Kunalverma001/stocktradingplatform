import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";

import LogoutWarningModal from "./LogoutWarningModal";

const user = JSON.parse(localStorage.getItem("user"));



export default function Menu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const userName = user?.name;
  const userEmail = user?.email;
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((w) => w[0])
        .join("")
        .toUpperCase()
    : "U";
  
  function handleLogoutClick() {
    setShowWarning(true);
  }

function confirmLogout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = `${import.meta.env.VITE_MAIN_APP_URL}`;
  }
  
  return (
    <div className="Menu-container container-fluid">
      <div className="menu-img">
        <img src="/media/logo.png" alt="" />
      </div>

      {/* DESKTOP MENU */}
      <div className="menu-option d-none d-lg-flex">
        <ul>
          <li>
            <NavLink to="/">
              <p className={location.pathname === "/" ? "active-option" : ""}>
                Dashboard
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders">
              <p
                className={
                  location.pathname === "/orders" ? "active-option" : ""
                }
              >
                Orders
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/holdings">
              <p
                className={
                  location.pathname === "/holdings" ? "active-option" : ""
                }
              >
                Holdings
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/positions">
              <p
                className={
                  location.pathname === "/positions" ? "active-option" : ""
                }
              >
                Positions
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/funds">
              <p
                className={
                  location.pathname === "/funds" ? "active-option" : ""
                }
              >
                Funds
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink to="/news">
              <p
                className={location.pathname === "/news" ? "active-option" : ""}
              >
                News
              </p>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* USER PROFILE DROPDOWN */}
      <div className="menu-profile-wrapper">
        <div
          className="menu-user-profile"
          onClick={() => setOpenProfile(!openProfile)}
        >
          <span>{initials}</span>
          {/* Optional: show name on large screens */}
          <p className="d-none d-md-block">{userName}</p>
          <i className="fa-solid fa-chevron-down profile-arrow"></i>
        </div>

        {/* DROPDOWN */}
        <div className={`profile-dropdown ${openProfile ? "show" : ""}`}>
          <div className="profile-header">
            <span className="profile-avatar">{initials}</span>
            <div>
              <h4>{userName}</h4>
              <p>{userEmail}</p>
            </div>
          </div>

          <button
            className="profile-item"
            onClick={() =>
              (window.location.href = `${import.meta.env.VITE_MAIN_APP_URL}`)
            }
          >
            Go to Main Website
          </button>

          <button className="profile-item logout" onClick={handleLogoutClick}>
            Logout
          </button>
          {showWarning && (
            <LogoutWarningModal
              onCancel={() => setShowWarning(false)}
              onConfirm={confirmLogout}
            />
          )}
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className="nav-dropdown d-block d-lg-none">
        <button className="ham-icon" onClick={() => setOpen(!open)}>
          <span>
            <i className="fa-solid fa-bars fs-5"></i>
          </span>
        </button>

        <div className={`nav-mobile ${open ? "show" : ""}`}>
          <ul>
            <li>
              <NavLink to="/">
                <p
                  className={location.pathname === "/" ? "active-option" : ""}
                  onClick={() => setOpen(!open)}
                >
                  Dashboard
                </p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/orders">
                <p
                  className={
                    location.pathname === "/orders" ? "active-option" : ""
                  }
                  onClick={() => setOpen(!open)}
                >
                  Orders
                </p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/holdings">
                <p
                  className={
                    location.pathname === "/holdings" ? "active-option" : ""
                  }
                  onClick={() => setOpen(!open)}
                >
                  Holdings
                </p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/positions">
                <p
                  className={
                    location.pathname === "/positions" ? "active-option" : ""
                  }
                  onClick={() => setOpen(!open)}
                >
                  Positions
                </p>
              </NavLink>
            </li>

            <li>
              <NavLink to="/funds">
                <p
                  className={
                    location.pathname === "/funds" ? "active-option" : ""
                  }
                  onClick={() => setOpen(!open)}
                >
                  Funds
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">
                <p
                  className={
                    location.pathname === "/news" ? "active-option" : ""
                  }
                  onClick={() => setOpen(!open)}
                >
                  News
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
