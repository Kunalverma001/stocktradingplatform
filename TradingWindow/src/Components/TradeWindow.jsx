import { useEffect, useState } from "react";
import "./TradeWindow.css";
import ToastMessage from "./ToastMessage";
import api from "../Utils/api";
import useDelayedLoader from "../Utils/UseDelayedLoader";

export default function TradeWindow({
  stock,
  onClose,
  mode,
  onTradeSuccess,
  setLoading,
}) {
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [Funds, setFunds] = useState(null);
  const [Holding, setHolding] = useState(null);
  const [Toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const { startLoading, stopLoading } = useDelayedLoader(setLoading);

  useEffect(() => {
    async function loadData() {
      const f = await api.get("/funds");
      const h = await api.get("/holdings");

      setFunds(f.data);
      const holdingArray = Array.isArray(h.data) ? h.data : [];
      const found = holdingArray.find((x) => x.name === stock.symbol);
      setHolding(found || null);
    }
    loadData();
  }, [stock.symbol]);

  useEffect(() => {
    if (quantity) {
      setTotal((quantity * stock.price).toFixed(2));
    } else {
      setTotal("");
    }
  }, [quantity, stock.price]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!quantity || quantity <= 0) {
      return setToast({
        show: true,
        message: "Enter a valid quantity",
        type: "danger",
      });
    }

    if (mode === "sell" && (!Holding || quantity > Holding.qty)) {
      return setToast({
        show: true,
        message: `You only hold ${Holding?.qty} shares`,
        type: "danger",
      });
    }

    if (mode === "buy" && Funds && total > Funds.availableBalance) {
      return setToast({
        show: true,
        message: "Insufficient balance",
        type: "danger",
      });
    }

    try {
      const payload = {
        name: stock.symbol,
        qty: Number(quantity),
        price: Number(stock.price),
      };

      const url = mode === "buy" ? "/buyStock" : "/sellStock";

      startLoading();
      const res = await api.post(url, payload);

      setToast({ show: true, message: res.data.message, type: "success" });

      setTimeout(() => {
        onTradeSuccess?.();
        onClose();
      }, 800);
    } catch (err) {
      console.log(err);
      setToast({
        show: true,
        message: "Trade Failed",
        type: "danger",
      });
    } finally {
      stopLoading();
    }
  }
  return (
    <div className="TradeWindow-container container-fluid">
      <div className="tradewindow-main">
        <div className="close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="stock-name">
          <h2>
            <span style={{ color: mode === "buy" ? "#387ed0" : "red" }}>
              {mode.toUpperCase()}
            </span>{" "}
            <i>'{stock.symbol}'</i>
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="trade-window-form">
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            name="quantity"
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label>Total</label>
          <input type="text" value={total} readOnly />

          {mode === "buy" && Funds && (
            <p style={{ marginTop: "6px", color: "#444" }}>
              Available: ₹{Funds.availableBalance.toLocaleString()}
            </p>
          )}

          {mode === "sell" && Holding && (
            <p style={{ marginTop: "6px", color: "#444" }}>
              You hold: {Holding.qty} shares
            </p>
          )}
          <button
            type="submit"
            className={`confirm-btn ${mode === "buy" ? "buy" : "sell"}`}
          >
            {mode === "buy" ? "Confirm Purchase" : "Confirm Sell"}
          </button>
        </form>
      </div>
      <ToastMessage
        {...Toast}
        onClose={() => setToast({ ...Toast, show: false })}
      />
    </div>
  );
}
