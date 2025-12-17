import "./Dashboard.css";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import TradeWindow from "./TradeWindow";
import MarketStrip from "./MarketStrip";
import NewsSection from "./NewsSection";
import DashboardIntroPopup, { openDashboardIntro } from "./DashboardPopUp";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function Dashboard({setLoading}) {
  const [TradeData, setTradeData] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);

  function handleTradeClick(stock, mode) {
    setTradeData({ stock, mode });
  }
  function closeWindow() {
    setTradeData(null);
  }

  function handleTradeSuccess() {
    setRefreshKey((prev) => prev + 1);
  }

  return (
    <>
      <DashboardIntroPopup />

      {/* ⭐ Toggle Button */}
      <button
        className="intro-toggle"
        title="Dashboard Guide"
        onClick={openDashboardIntro}
      >
        <i className="fa-solid fa-star"></i>
      </button>
      <div className="container-fluid dashboard-container p-0">
        <div className="dashboard-main row g-0">
          <button
            className="drawer-toggle"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            {showDrawer ? "←" : "→"}
          </button>
          <div
            className={`mobile-watchlist-drawer ${showDrawer ? "open" : ""}`}
          >
            <MarketStrip />
            <WatchList onTradeClick={handleTradeClick} />
          </div>
          {showDrawer && (
            <div
              className="drawer-overlay d-xl-none"
              onClick={() => setShowDrawer(false)}
            ></div>
          )}
          <div className="col-12 col-xl-4 d-none d-xl-block watchlist-section">
            <WatchList onTradeClick={handleTradeClick} />
          </div>
          <div className="col-12 col-xl-8 dashboard-section">
            <Routes>
              <Route path="/" element={<Summary refreshKey={refreshKey} />} />
              <Route
                path="/orders"
                element={<Orders refreshKey={refreshKey} />}
              />
              <Route
                path="/holdings"
                element={<Holdings refreshKey={refreshKey} />}
              />
              <Route
                path="/positions"
                element={<Positions refreshKey={refreshKey} />}
              />
              <Route
                path="/funds"
                element={<Funds refreshKey={refreshKey} />}
              />
              <Route path="/news" element={<NewsSection />} />
            </Routes>
          </div>
          {TradeData && (
            <TradeWindow
              stock={TradeData.stock}
              mode={TradeData.mode}
              onClose={closeWindow}
              onTradeSuccess={handleTradeSuccess}
              setLoading = {setLoading}
            />
          )}
        </div>
      </div>
    </>
  );
}
