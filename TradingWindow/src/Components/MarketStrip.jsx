import "./TopBar.css"; // reuse same styling

export default function MarketStrip() {
  return (
    <div className="row g-0 TopBar-first mobile-market-strip">
      <div className="col nifty">
        <p>NIFTY 50</p>
        <p>100.2</p>
      </div>
      <div className="col sensex">
        <p>SENSEX</p>
        <p>100.2</p>
      </div>
    </div>
  );
}
