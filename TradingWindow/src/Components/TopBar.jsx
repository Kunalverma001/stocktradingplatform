import "./TopBar.css";
import Menu from "./Menu";
import MarketStrip from "./MarketStrip";

export default function TopBar() {
  return (
    <div className="container-fluid TobBar-container">
      <div className="TopBar-main row g-0">
        <div className="col-12 col-xl-4 d-none d-xl-flex row g-0">
          <MarketStrip/>
        </div>
        <div className="col-12 col-xl-8 p-0 g-0 m-0 menu-main">
          <Menu />
        </div>
      </div>
    </div>
  );
}
