import { useEffect, useState } from "react";
import "./Holdings.css";
import api from "../Utils/api";

export default function Holdings({refreshKey}) {
  const [allholdings, setAllholdings] = useState([]);

  const [totalCost, setTotalCost] = useState(0);
  const [totalCurrValue, setTotalCurrValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const [profitLossPercent, setProfitLossPercent] = useState(0);

  useEffect(() => {
    api
      .get("/holdings")
      .then((res) => {
        setAllholdings(Array.isArray(res.data) ? res.data : []);
      })
      .catch(() => setAllholdings([]));
  }, [refreshKey]);

  useEffect(() => {
    if (allholdings.length === 0) {
      setTotalCost(0);
      setTotalCurrValue(0);
      setProfitLoss(0);
      setProfitLossPercent(0);
      return;
    }

    const cost = allholdings.reduce((sum, s) => sum + s.avg * s.qty, 0);
    const curr = allholdings.reduce((sum, s) => sum + s.price * s.qty, 0);

    const pnl = curr - cost;

    setTotalCost(cost);
    setTotalCurrValue(curr);
    setProfitLoss(pnl);
    setProfitLossPercent(cost ? ((pnl / cost) * 100).toFixed(2) : 0);
  }, [allholdings]);

  if (allholdings.length === 0) {
    return (
      <div className="holdings-container">
        <h2>No Holdings</h2>
        <p>You don’t own any stocks yet.</p>
      </div>
    );
  }

  return (
    <div className="container-fluid holdings-container">
      <h2>Holdings ({allholdings.length})</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty</th>
            <th>Avg</th>
            <th>LTP</th>
            <th>Cur. Val</th>
            <th>P&L</th>
          </tr>
        </thead>
        <tbody>
          {allholdings.map((s, i) => {
            const pnl = s.price * s.qty - s.avg * s.qty;
            return (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.qty}</td>
                <td>{s.avg?.toFixed(2)}</td>
                <td>{s.price?.toFixed(2)}</td>
                <td>{(s.price * s.qty).toFixed(2)}</td>
                <td className={pnl >= 0 ? "profit" : "loss"}>
                  {pnl.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="holding-value-section">
        <h4>Total Investment: ₹{totalCost.toFixed(2)}</h4>
        <h4>Current Value: ₹{totalCurrValue.toFixed(2)}</h4>
        <h4 className={profitLoss >= 0 ? "profit" : "loss"}>
          P&L: ₹{profitLoss.toFixed(2)} ({profitLossPercent}%)
        </h4>
      </div>
    </div>
  );
}
