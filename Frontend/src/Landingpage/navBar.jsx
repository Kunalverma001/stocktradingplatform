import React, { useEffect, useRef } from "react";
import { Link, useLocation,Navigate } from "react-router-dom";
import { useState } from "react";
import "./navBar.css";

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutSide(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutSide);
    }
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="nav-body container-fluid p-0 pt-1 pb-1 ">
        <Link className="navbar-brand " to="/">
          <img className="img" src="media/logo.svg" alt="" />
        </Link>
        <div className=" d-none d-md-none d-lg-flex  gap-3 ms-auto ">
          <ul className="nav-links d-flex m-0 p-0 gap-5">
            <li className="nav-item">
              <a
                className={
                  location.pathname === "signup" ? "nav-active" : "nav-link"
                }
                href={`${import.meta.env.VITE_DASHBOARD_URL}`}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/about" ? "nav-active" : "nav-link"
                }
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/product" ? "nav-active" : "nav-link"
                }
                aria-current="page"
                to="/product"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/pricing" ? "nav-active" : "nav-link"
                }
                aria-current="page"
                to="/pricing"
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  location.pathname === "/support" ? "nav-active" : "nav-link"
                }
                aria-current="page"
                to="/support"
              >
                Support
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
        <div
          className="dropdown-wrapper position-relative ms-auto ms-lg-0"
          ref={dropdownRef}
        >
          <button
            className="btn"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              <i className=" fa-solid fa-bars fs-5"></i>
            </span>
          </button>
          {isOpen && (
            <>
              {/* for big screen */}
              <div className=" big-screen dropdown-box m-2 shadow">
                <div className=" d-flex justify-content-between align-items-center text-center mt-3 ps-5 pe-5 dropdown-item">
                  <div className="external-link ">
                    <img src="./media/kite-logo.svg" alt="" />
                    <div>
                      <h6>Kite</h6>
                      <p>Trading platform</p>
                    </div>
                  </div>
                  <div className="external-link">
                    <img src="./media/console.svg" alt="" />
                    <div>
                      <h6>Console</h6>
                      <p>Backoffice</p>
                    </div>
                  </div>
                  <div className="external-link">
                    <img src="./media/kite-connect.svg" alt="" />
                    <div>
                      <h6>Kite Connect</h6>
                      <p>Trading APIs</p>
                    </div>
                  </div>
                  <div className="external-link">
                    <img src="./media/coin.svg" alt="" />
                    <div>
                      <h6>Coin</h6>
                      <p>Mutual funds</p>
                    </div>
                  </div>
                </div>
                <div className=" d-flex menu-footer pt-5 pb-2 gap-5">
                  <div className="foot-list d-flex ">
                    <div className="menu-foot-item">
                      <ul>
                        <h6>Utilities</h6>
                        <li>Calculators</li>
                        <li>Brokerage calculator</li>
                        <li>Margin calculator</li>
                        <li>SIP calculator</li>
                      </ul>
                    </div>
                    <div className=" menu-foot-item">
                      <ul>
                        <h6>Updates</h6>
                        <li>Z-Connect blog</li>
                        <li>Circulars / Bulletin</li>
                        <li>IPOs</li>
                        <li>Markets</li>
                      </ul>
                    </div>
                  </div>
                  <div className="foot-eduvar ms-4">
                    <h6>Education</h6>
                    <div className="d-flex mt-3 gap-5 p-2">
                      <div className="menu-foot-item text-center ">
                        <img src="./media/varsity-log.png" alt="" />
                        <p>Varsity</p>
                      </div>
                      <div className="menu-foot-item text-center">
                        <img src="./media/tqna.png" alt="" />
                        <p>Trading Q&A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* for mobile view   */}
              <div className=" d-lg-none dropdown-box mobile-view m-2 shadow m-0 p-0">
                <button
                  className="close-btn"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <div className="">
                  <ul className="mv-nav-links row g-0 m-0 p-3">
                    <li className="mv-nav-item col-6">
                      <a
                        className={
                          location.pathname === "signup"
                            ? "nav-active"
                            : "nav-link"
                        }
                        href={`${import.meta.env.VITE_DASHBOARD_URL}`}
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="mv-nav-item col-6">
                      <Link
                        className={
                          location.pathname === "/about"
                            ? "nav-active"
                            : "nav-link"
                        }
                        aria-current="page"
                        to="/about"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        About
                      </Link>
                    </li>
                    <li className="mv-nav-item col-6">
                      <Link
                        className={
                          location.pathname === "/product"
                            ? "nav-active"
                            : "nav-link"
                        }
                        aria-current="page"
                        to="/product"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="mv-nav-item col-6">
                      <Link
                        className={
                          location.pathname === "/pricing"
                            ? "nav-active"
                            : "nav-link"
                        }
                        aria-current="page"
                        to="/pricing"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Pricing
                      </Link>
                    </li>
                    <li className="mv-nav-item col-6">
                      <Link
                        className={
                          location.pathname === "/support"
                            ? "nav-active"
                            : "nav-link"
                        }
                        aria-current="page"
                        to="/support"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className=" mv-external-links">
                  <div className=" row p-3">
                    <div className="mv-external-link col-6">
                      <img src="./media/kite-logo.svg" alt="" />
                      <p>Kite</p>
                    </div>
                    <div className="mv-external-link col-6">
                      <img src="./media/console.svg" alt="" />
                      <p>Console</p>
                    </div>
                    <div className="mv-external-link col-6">
                      <img src="./media/kite-connect.svg" alt="" />
                      <p>Kite Connect</p>
                    </div>
                    <div className="mv-external-link col-6">
                      <img src="./media/coin.svg" alt="" />
                      <p>Coin</p>
                    </div>
                    <div className="mv-external-link var col-6">
                      <img src="./media/varsity-log.png" alt="" />
                      <p>Varsity</p>
                    </div>
                    <div className="mv-external-link tqna col-6">
                      <img src="./media/tqna.png" alt="" />
                      <p>Trading Q&A</p>
                    </div>
                  </div>
                </div>
                <div className="foot-list d-flex row m-0 p-3">
                  <ul className="menu-foot-item col-6">
                    <h6>Utilities</h6>
                    <li>Calculators</li>
                    <li>Brokerage calculator</li>
                    <li>Margin calculator</li>
                    <li>SIP calculator</li>
                  </ul>
                  <ul className="menu-foot-item col-6">
                    <h6>Updates</h6>
                    <li>Z-Connect blog</li>
                    <li>Circulars / Bulletin</li>
                    <li>IPOs</li>
                    <li>Markets</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;