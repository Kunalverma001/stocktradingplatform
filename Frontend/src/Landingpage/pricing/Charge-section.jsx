import "./Charge-section.css";

export default function ChargeSection() {
  return (
    <div className="container-fluid Charge-container">
      <div className="Charge-main row gap-0 text-center">
        <div className="col-12 col-md-4">
            <img src="./media/pricing-eq.svg" alt="" />
            <h2>Free equity delivery</h2>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-12 col-md-4">
            <img src="./media/intradayTrades.svg" alt="" />
            <h2>Intraday and F&O trades</h2>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-12 col-md-4">
            <img src="./media/pricing-eq.svg" alt="" />
            <h2>Free direct MF</h2>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}
