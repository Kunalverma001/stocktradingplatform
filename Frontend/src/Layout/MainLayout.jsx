import Navbar from "../Landingpage/navBar.jsx";
import Footer from "../Landingpage/Footer.jsx";
import PopUp from "../Landingpage/PopUp.jsx";
import StarButton from "../Landingpage/StarButton.jsx";
import Toast from "../LandingPage/Toast";
import { Outlet } from "react-router-dom";

import { useState,useEffect } from "react";

export default function MainLayout() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    function handleShowcaseClick(e) {
      const target = e.target.closest("[data-showcase]");
      if (!target) return;

      e.preventDefault();

      window.dispatchEvent(
        new CustomEvent("show-toast", {
          detail: "This feature is coming soon 🚀",
        })
      );
    }

    document.addEventListener("click", handleShowcaseClick);
    return () => document.removeEventListener("click", handleShowcaseClick);
  }, []);


  useEffect(() => {
    setIsLoggedIn(!localStorage.getItem("token"));
  }, []);

  return (
    <>
      <Toast />
      <PopUp />
      <StarButton />
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
}
