import "./Summary.css";
import { useEffect, useState } from "react";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import api from "../Utils/api";

const user = JSON.parse(localStorage.getItem("user"));

export default function Summary({refreshKey}) {
  function formatNumber(num) {
    if (num >= 10000000)
      return (num / 10000000).toFixed(2).replace(/\.00$/, "") + "Cr";

    if (num >= 100000)
      return (num / 100000).toFixed(2).replace(/\.00$/, "") + "L";

    if (num >= 1000) return (num / 1000).toFixed(2).replace(/\.00$/, "") + "k";

    return num.toString();
  }

  const [funds, setFunds] = useState(null);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    async function loadData() {
      const f = await api.get("/funds");
      const h = await api.get("/holdings");

      setFunds(f.data);
      setHoldings(Array.isArray(h.data) ? h.data : []);
    }
    loadData();
  }, [refreshKey]);

  const pieData = holdings.map((s) => ({
    name: s.name,
    value: s.avg * s.qty,
  }));

  const chartColors = [
    "#387ed0",
    "#4aa0d5",
    "#77c4d3",
    "#f5a623",
    "#f76c6c",
    "#9b59b6",
    "#2ecc71",
    "#e67e22",
  ];

  // ---- Overall Returns ----
  const totalInvested = holdings.reduce((sum, h) => sum + h.avg * h.qty, 0);

  const currentValue = holdings.reduce((sum, h) => sum + h.price * h.qty, 0);

  const overallPnL = currentValue - totalInvested;

  const overallReturnPercent =
    totalInvested > 0
      ? ((overallPnL / totalInvested) * 100).toFixed(2)
      : "0.00";

  // ---- Best & Worst Performer ----
  const holdingsWithReturn = holdings
    .filter((h) => h.avg > 0)
    .map((h) => ({
      ...h,
      pnlPercent: ((h.price - h.avg) / h.avg) * 100,
    }));

  const bestPerformer =
    holdingsWithReturn.length > 0
      ? holdingsWithReturn.reduce((best, h) =>
          h.pnlPercent > best.pnlPercent ? h : best
        )
      : null;

  const worstPerformer =
    holdingsWithReturn.length > 0
      ? holdingsWithReturn.reduce((worst, h) =>
          h.pnlPercent < worst.pnlPercent ? h : worst
        )
      : null;

  if (!funds) return <h3>Loading...</h3>;

  const sumdata = [
    {
      title: "Equity",
      big_num: `₹${formatNumber(funds.availableBalance)}`,
      small_num: "",
      sub_info: "Margin available",
      sub_info1: `Margin used : ₹${funds.usedMargin.toLocaleString()}`,
      sub_info2: `Opening balance : ₹${funds.totalBalance.toLocaleString()}`,
    },
    {
      title: "Holdings",
      big_num: `₹${overallPnL.toFixed(2)}`,
      small_num: `${overallReturnPercent}%`,
      sub_info: "P&L",
      sub_info1: `Current Value: ₹${formatNumber(currentValue)}`,
      sub_info2: `Investment: ₹${formatNumber(totalInvested)}`,
    },
  ];
  return (
    <div className="container-fluid summary-container">
      <div className="username-section">
        <h2>Hi, {user?.name || "User"}</h2>
      </div>

      <div className="summary-grid">
        {sumdata.map((item, index) => (
          <div className="summary-section" key={index}>
            <h2>{item.title}</h2>
            <div className="summary-data">
              <div className="summary-data-first">
                <span>
                  <p>
                    {item.big_num}
                    <small>{item.small_num}</small>
                  </p>
                </span>
                <p>{item.sub_info}</p>
              </div>
              <div className="summary-data-second">
                <p>{item.sub_info1}</p>
                <p>{item.sub_info2}</p>
              </div>
            </div>
          </div>
        ))}
        {/* MINI ANALYTICS SECTION */}
        <div className="analytics-grid">
          <div className="analytics-card">
            <h4>Total Stocks Held</h4>
            <p>{holdings.length}</p>
          </div>

          <div className="analytics-card">
            <h4>Best Performer</h4>
            <p>{bestPerformer ? bestPerformer.name : "—"}</p>
          </div>

          <div className="analytics-card">
            <h4>Worst Performer</h4>
            <p>{worstPerformer ? worstPerformer.name : "—"}</p>
          </div>

          <div className="analytics-card">
            <h4>Overall Return %</h4>
            <p>
              ₹{overallPnL.toFixed(2)} ({overallReturnPercent}%)
            </p>
          </div>
        </div>
        {/* PIE CHART — */}
        <div className="piechart-wrapper">
          <div className="piechart-header">
            <h3>Investment Allocation</h3>
          </div>

          <div className="piechart-content">
            {/* Left: Pie Chart */}
            <div className="piechart-chart">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={2}
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`slice-${index}`}
                        fill={chartColors[index % chartColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Right: Legend */}
            <div className="piechart-legend">
              {pieData.map((item, index) => (
                <div className="legend-row" key={index}>
                  <span
                    className="legend-color"
                    style={{
                      backgroundColor: chartColors[index % chartColors.length],
                    }}
                  ></span>
                  <p className="legend-name">{item.name}</p>
                  <p className="legend-value">
                    {((item.value / totalInvested) * 100).toFixed(1)}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
