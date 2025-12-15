import { useRef, useState } from "react";
import "./Options.css";

function Option() {
  const [openIndex, setOpenIndex] = useState(null);

  const optionList = [
    {
      title: "Account Opening",
      logo: "./media/circle-plus-logo.png",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      logo: "./media/user-logo.png",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      logo: "./media/kite-logo.svg",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      logo: "./media/rupees-logo.png",
      items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      logo: "./media/console.svg",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      logo: "./media/coin.svg",
      items: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container-fluid option-container">
      <div className="row g-0 h-100 option-main">
        <div className="col-12 col-md-8 option-list main-left">
          {optionList.map((option, index) => {
            const isOpen = openIndex === index;
            const contentRef = useRef(null);

            return (
              <div className="group" key={index}>
                <div
                  className="options"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <div id="logo-img-container">
                    <img
                      className="logo-img"
                      src={option.logo}
                      alt={`${option.title} logo`}
                    />
                  </div>
                  <h2>{option.title}</h2>
                  <div id="arrow-img-container">
                    <img
                      className={`arrow-img ${isOpen ? "open" : ""}`}
                      src="./media/down-arrow-logo.png"
                      alt="arrow icon"
                    />
                  </div>
                </div>

                <div
                  className={`options-detail ${isOpen ? "show" : ""}`}
                  ref={contentRef}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRef.current?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <div className="options-inner">
                    <ul>
                      {option.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-12 col-md-4 main-right">
          <div className="row g-0 sub-columns">
            <div className="col-12 sub-column-first">
              <ul>
                <li>
                  <a href="" data-showcase>
                    Surveillance measure on scrips - October 2025
                  </a>
                </li>
                <li>
                  <a href="" data-showcase>
                    Rights Entitlements listing in October 2025
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 sub-column-second">
              <table>
                <thead>
                  <th>Quick links</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1. Track account opening</td>
                  </tr>
                  <tr>
                    <td>2. Track segment activation</td>
                  </tr>
                  <tr>
                    <td>3. Intraday margins</td>
                  </tr>
                  <tr>
                    <td>4. Kite user manual</td>
                  </tr>
                  <tr>
                    <td>5. Learn how to create a ticket</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option;
