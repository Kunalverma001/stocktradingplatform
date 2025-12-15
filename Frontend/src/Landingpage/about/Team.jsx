import { useState } from "react";
import "./Team.css";

function Team() {
  const [visibleBios, setVisibleBios] = useState([]);

  const toggleBio = (member) => {
    if (visibleBios.includes(member)) {
      setVisibleBios(visibleBios.filter((bio) => bio !== member));
    } else {
      setVisibleBios([...visibleBios, member]);
    }
  };

  return (
    <div className=" container-fluid about-people">
      <div className=" mini-container">
        <h2>People</h2>
        <div className="team-head row">
          <div className="team-head-one col-12 col-md-5 ">
            <img className="img-fluid" src="media/nithinKamath.jpg" alt="" />
            <h5>Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
          <div className="team-head-two col-12 col-md-7">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade-long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="" data-showcase>Homepage</a> / <a href="" data-showcase>TradingQnA</a> /{" "}
              <a href="" data-showcase>Twitter</a>
            </p>
          </div>
        </div>
      </div>
      <div className="team-member">
        <div className="row g-0 ">
          <div className=" team-member-container col-12 col-md-4">
            <img className="img-fluid" src="./media/Nikhil.jpg" alt="" />
            <h5>Nikhil Kamath</h5>
            <p>Co-founder & CFO</p>
            <a
              href="#"
              className="anc"
              onClick={(event) => {
                event.preventDefault();
                toggleBio("nikhil");
              }}
            >
              Bio <i className="fa-solid fa-chevron-down show-bio"></i>
            </a>
            <div
              className={`mem-inf ${
                visibleBios.includes("nikhil") ? "visible" : ""
              }`}
            >
              <p>
                Nikhil is an astute and experienced investor, and he heads
                financial planning at Zerodha. An avid reader, he always
                appreciates a good game of chess.
              </p>
            </div>
          </div>
          <div className="team-member-container col-12 col-md-4">
            <img className="img-fluid" src="./media/Kailash.jpg" alt="" />
            <h5>Dr. Kailash Nadh</h5>
            <p>CTO</p>
            <a
              href="#"
              className="anc"
              onClick={(event) => {
                event.preventDefault();
                toggleBio("kailash");
              }}
            >
              Bio <i className="fa-solid fa-chevron-down show-bio"></i>
            </a>
            <div
              className={`mem-inf ${
                visibleBios.includes("kailash") ? "visible" : ""
              }`}
            >
              <p>
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </p>
            </div>
          </div>
          <div className="team-member-container col-12 col-md-4">
            <img className="img-fluid" src="./media/Venu.jpg" alt="" />
            <h5>Venu Madhav</h5>
            <p>COO</p>
            <a
              href="#"
              className="anc"
              onClick={(event) => {
                event.preventDefault();
                toggleBio("venu");
              }}
            >
              Bio <i className="fa-solid fa-chevron-down show-bio"></i>
            </a>
            <div
              className={`mem-inf ${
                visibleBios.includes("venu") ? "visible" : ""
              }`}
            >
              <p>
                Venu is the backbone of Zerodha taking care of operations and
                ensuring that we are compliant to rules and regulations. He has
                over a dozen certifications in financial markets and is also
                proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of Zerodha.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="team-member-container col-12 col-md-4">
            <img className="img-fluid" src="./media/Hanan.jpg" alt="" />
            <h5>Hanan Delvi</h5>
            <p>CCO</p>
            <a
              href="#"
              className="anc"
              onClick={(event) => {
                event.preventDefault();
                toggleBio("hanan");
              }}
            >
              Bio <i className="fa-solid fa-chevron-down show-bio"></i>
            </a>
            <div
              className={`mem-inf ${
                visibleBios.includes("hanan") ? "visible" : ""
              }`}
            >
              <p>
                We take pride in the way we support our clients, and Hanan is
                responsible for this with his never-ending flow of energy. He is
                the man behind many of our support initiatives that have helped
                us stay ahead of the game. A free thinker, Hanan can be seen
                posing as one in his free time.
              </p>
            </div>
          </div>
          <div className="team-member-container col-12 col-md-4">
            <img className="img-fluid" src="./media/Seema.jpg" alt="" />
            <h5>Seema Patil</h5>
            <p>Director</p>
            <a
              href="#"
              className="anc"
              onClick={(event) => {
                event.preventDefault();
                toggleBio("seema");
              }}
            >
              Bio <i className="fa-solid fa-chevron-down show-bio"></i>
            </a>
            <div
              className={`mem-inf ${
                visibleBios.includes("seema") ? "visible" : ""
              }`}
            >
              <p>
                Seema, who has led the quality team since the beginning of
                Zerodha, is now a director. She is an extremely disciplined
                fitness enthusiast.
              </p>
            </div>
          </div>
          <div className="team-member-container col-12 col-md-4">
            <img className="img-fluid" src="./media/karthik.jpg" alt="" />
            <h5>Karthik Rangappa</h5>
            <p>Chief of Education</p>
            <a
              href="#"
              className="anc"
              onClick={(event) => {
                event.preventDefault();
                toggleBio("karthik");
              }}
            >
              Bio <i className="fa-solid fa-chevron-down show-bio"></i>
            </a>
            <div
              className={`mem-inf ${
                visibleBios.includes("karthik") ? "visible" : ""
              }`}
            >
              <p>
                Karthik "Guru" Rangappa single-handedly wrote Varsity, Zerodha's
                massive educational program. He heads investor education
                initiatives at Zerodha and loves stock markets, classic rock,
                single malts, and photography.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="team-member-container col-12 col-md-4">
            <img className="img-fluid" src="./media/Austin.jpg" alt="" />
            <h5>Austin Prakesh</h5>
            <p>Director Strategy</p>
            <a
              href="#"
              className="anc"
              onClick={(event) => {
                event.preventDefault();
                toggleBio("austin");
              }}
            >
              Bio <i className="fa-solid fa-chevron-down show-bio"></i>
            </a>
            <div
              className={`mem-inf ${
                visibleBios.includes("austin") ? "visible" : ""
              }`}
            >
              <p>
                Austin is a successful self-made entrepreneur from Singapore.
                His area of specialty revolves around helping organizations grow
                by optimizing revenue streams and creating growth strategies. He
                is a boxing enthusiast and loves collecting exquisite watches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
