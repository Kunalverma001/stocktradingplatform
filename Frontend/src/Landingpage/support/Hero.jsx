import "./Hero.css";
function Hero() {
  return (
    <div className="container-fluid s-hero-container">
      <div className="row g-0 s-hero-ticket">
        <div className="col col-sx-12 s-hero-first">
          <a href="" data-showcase>
            Support Portal
          </a>
        </div>
        <div className="col col-sx-12 s-hero-second">
          <button className="ticketbtn" data-showcase>
            My tickets
          </button>
        </div>
      </div>
      <div className="s-text-area">
        <span>
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          id="support-text-input"
          type="text"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          autoFocus
        />
      </div>
    </div>
  );
}

export default Hero;
