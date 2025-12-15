import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import MainLayout from "./Layout/MainLayout";

import HomePage from "./Landingpage/home/Homepage.jsx";
import PricingPage from "./Landingpage/pricing/pricingpage.jsx";
import SupportPage from "./Landingpage/support/supportPage.jsx";
import AboutPage from "./Landingpage/about/AboutPage.jsx";
import ProductPage from "./Landingpage/product/ProductPage.jsx";
import NotFoundPage from "./Landingpage/NotFoundPage.jsx";

import "./App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
