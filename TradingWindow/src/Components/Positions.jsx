import "./Position.css";
import { useState, useEffect } from "react";

import api from "../Utils/api";

export default function Postitions({refreshKey}) {
  const [allPositions, setAllpositions] = useState([]);

  useEffect(() => {
    api
      .get("/positions", {})
      .then((res) => {
        setAllpositions(Array.isArray(res.data) ? res.data : []);
      })
      .catch(() => {
        console.log("Error fetching positions data");
        setAllpositions([]);
      });
  }, [refreshKey]);

  return (
    <div className="container-fluid position-container">
      <div className="position-head">
        <h2>Position ({allPositions.length})</h2>
      </div>
      <div className="position-table">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Day Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td data-label="Product">{stock.product}</td>
                  <td data-label="Instrument">{stock.name}</td>
                  <td data-label="Qty">{stock.qty}</td>
                  <td data-label="Avg.">{stock.avg.toFixed(2)}</td>
                  <td data-label="LTP">{stock.price.toFixed(2)}</td>
                  <td data-label="P&L" className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td data-label="Day Chg." className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
