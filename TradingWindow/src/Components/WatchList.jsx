import "./WatchList.css";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import { useEffect, useState } from "react";
import axios from "axios";

export default function WatchList({ onTradeClick }) {
  const [stocks, setStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
  const SYMBOLS = ["AAPL", "TSLA", "MSFT", "AMZN", "GOOGL"];
  const API_URL = "https://finnhub.io/api/v1/quote";

  const filteredStocks = stocks.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    async function fetchAll() {
      try {
        const results = [];

        const USD_TO_INR = 90;

        for (let symbol of SYMBOLS) {
          const res = await axios.get(
            `${API_URL}?symbol=${symbol}&token=${API_KEY}`
          );

          const usdPrice = res.data.c;
          const inrPrice = usdPrice * USD_TO_INR;

          results.push({
            symbol,
            price: Number(inrPrice.toFixed(2)), // ₹ price
            change: Number((res.data.d * USD_TO_INR).toFixed(2)),
            percent: res.data.dp,
            isDown: res.data.d < 0,
          });
        }

        setStocks(results);
      } catch (err) {
        console.error("API ERROR:", err);
      }
    }

    fetchAll();
    const interval = setInterval(fetchAll, 15000); // safer refresh
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search stocks eg: AAPL"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search"
        />
        
        {searchQuery && (
          <button className="search-clear" onClick={() => setSearchQuery("")}>
            ✕
          </button>
        )}

        <span className="count">
          <p>{stocks.length}/50</p>
        </span>
      </div>

      <div className="stocks-container">
        <ul>
          {filteredStocks.length === 0 ? (
            <p className="no-results">No matching stocks</p>
          ) : (
            filteredStocks.map((stock) => (
              <WatchListItem
                stock={stock}
                key={stock.symbol}
                onTradeClick={onTradeClick}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export function WatchListItem({ stock, onTradeClick }) {
  const [showMouseAction, setShowMouseAction] = useState(false);
  const [flashClass, setFlashClass] = useState("");
  const [prevPrice, setPrevPrice] = useState(stock.price);
  const { symbol, price, percent, isDown } = stock;

  useEffect(() => {
    if (stock.price !== prevPrice) {
      if (stock.price > prevPrice) setFlashClass("flash-green");
      else setFlashClass("flash-red");

      setPrevPrice(stock.price);

      setTimeout(() => setFlashClass(""), 600);
    }
  }, [stock.price]);

  return (
    <li
      className={`watchlist-item-new ${flashClass}`}
      onMouseEnter={() => setShowMouseAction(true)}
      onMouseLeave={() => setShowMouseAction(false)}
    >
      <div className="wl-left">
        <div className="wl-symbol">{symbol}</div>
      </div>

      <div className="wl-middle">
        <div className={`wl-price ${isDown ? "red" : "green"}`}>
          ₹{price || "--"}
        </div>
        <div className={`wl-percent ${isDown ? "red" : "green"}`}>
          {percent ? percent + "%" : "--"}
        </div>
      </div>

      <div className="wl-right">
        {isDown ? (
          <KeyboardArrowDown className="red" />
        ) : (
          <KeyboardArrowUp className="green" />
        )}
      </div>

      {showMouseAction && (
        <div className="wl-actions">
          <button className="wl-buy" onClick={() => onTradeClick(stock, "buy")}>
            Buy
          </button>
          <button
            className="wl-sell"
            onClick={() => onTradeClick(stock, "sell")}
          >
            Sell
          </button>
        </div>
      )}
    </li>
  );
}

export function WatchListActions({ stock, onTradeClick }) {
  return (
    <div className="list-actions-container">
      <div className="list-actions">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={() => onTradeClick(stock, "buy")}>
            Buy
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell" onClick={() => onTradeClick(stock, "sell")}>
            Sell
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
