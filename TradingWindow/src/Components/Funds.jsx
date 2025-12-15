import "./Funds.css";
import { useEffect, useState } from "react";

import api from "../Utils/api";

export default function Funds({ refreshKey }) {
  const [funds, setFunds] = useState(null);

  useEffect(() => {
    api
      .get("/funds")
      .then((res) => {
        const f = res.data || {};

        setFunds({
          ...f,
          transactions: Array.isArray(f.transactions) ? f.transactions : [],
        });
      })
      .catch((err) => {
        console.log("Error fetching funds data", err);
      });
  }, [refreshKey]);

  if (!funds) {
    return <h2>Loading Funds</h2>;
  }

  return (
    <div className="funds-container container-fluid">
      <div className="funds-head">
        <h2>Funds Overview</h2>
      </div>
      <div className="row g-0 funds-available">
        <div className="col">
          <p>Total Balance</p>
          <h3>₹{funds?.totalBalance?.toFixed(2) ?? "0.00"}</h3>
        </div>
        <div className="col">
          <p>Available to Trade</p>
          <h3>₹{funds?.availableBalance?.toFixed(2) ?? "0.00"}</h3>
        </div>
      </div>
      <div className="row g-0 funds-withdraw">
        <div className="col">
          <p>Used Margin</p>
          <h3>₹{funds?.usedMargin?.toFixed(2) ?? "0.00"}</h3>
        </div>
        <div className="col">
          <p>Withdrawable</p>
          <h3>₹{funds?.availableBalance?.toFixed(2) ?? "0.00"}</h3>
        </div>
      </div>
      <div className="trans-head">
        <h2>Transaction History</h2>
      </div>
      <div className="trans-history">
        <table className="trans-table table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance After</th>
            </tr>
          </thead>
          <tbody>
            {funds.transactions.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No Transactions
                </td>
              </tr>
            ) : (
              funds.transactions.map((tx, i) => (
                <tr key={i}>
                  <td data-label="Date">
                    {new Date(tx.date).toLocaleDateString()}
                  </td>
                  <td data-label="Type">{tx.type.toUpperCase()}</td>
                  <td data-label="Description">{tx.description}</td>
                  <td
                    data-label="Amount"
                    className={tx.type === "credit" ? "green" : "red"}
                  >
                    {tx.type === "credit" ? "+" : "-"}₹
                    {tx?.amount?.toFixed(2) ?? "0.00"}
                  </td>
                  <td data-label="Balance After">
                    ₹{tx?.balanceAfter?.toFixed(2) ?? "0.00"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}