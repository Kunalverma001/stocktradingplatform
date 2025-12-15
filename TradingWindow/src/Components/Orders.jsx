import "./Orders.css";
import { useEffect, useState } from "react";

import api from "../Utils/api";

export default function Orders({refreshKey}) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api
      .get("/orders")
      .then((res) => setOrders(Array.isArray(res.data) ? res.data : []))
      .catch(() => console.log("Error fetching orders"));
  }, [refreshKey]);

  return (
    <div className="container-fluid orders-container">
      <div className="orders-head">
        <h2>Recent Orders</h2>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <h2>You haven't placed any orders yet</h2>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order, i) => (
            <div
              key={i}
              className={`order-card ${
                order.mode === "buy" ? "buy-card" : "sell-card"
              }`}
            >
              <div className="order-header">
                <h3>
                  {order.mode === "buy" ? "🟢 BUY" : "🔴 SELL"} | {order.name}
                </h3>
                <span className="order-status">{order.status}</span>
              </div>

              <div className="order-details">
                <p>
                  <strong>Qty:</strong> {order.qty} @ ₹{order.price}
                </p>
                <p>
                  <strong>Total:</strong> ₹{order.qty * order.price}
                </p>
              </div>

              <div className="order-footer">
                <p className="order-date">
                  🕓 {new Date(order.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
