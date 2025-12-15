import { useState } from "react";
import "./Brokerage-section.css";

export default function BrokerageSection() {
  const [Active, setActive] = useState("equity");
  const [Show, setShow] = useState("equity-data");

  return (
    <div className="Brokerage-container container-fluid ">
      <div className="Brokerage-main">
        <div className="Brokerage-navtabs">
          <a
            className={
              Active == "equity" ? "tab tab-equity active" : "tab tab-equity"
            }
            href=""
            onClick={(event) => {
              event.preventDefault();
              setActive("equity");
              setShow("equity-data");
            }}
          >
            Equity
          </a>
          <a
            className={
              Active == "currency"
                ? "tab tab-currency active"
                : "tab tab-currency"
            }
            href=""
            onClick={(event) => {
              event.preventDefault();
              setActive("currency");
              setShow("currency-data");
            }}
          >
            Currency
          </a>
          <a
            className={
              Active == "commodity"
                ? "tab tab-commodity active"
                : "tab tab-commodity"
            }
            href=""
            onClick={(event) => {
              event.preventDefault();
              setActive("commodity");
              setShow("commodity-data");
            }}
          >
            Commodity
          </a>
        </div>
        <div
          className={
            Show == "equity-data"
              ? " show table-responsive"
              : "equity-data table-responsive"
          }
        >
          <table className="table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th className="d-none d-md-table-cell ">F&O - Futures</th>
                <th className="d-none d-md-table-cell ">F&O - Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td className="d-none d-md-table-cell ">
                  0.03% or Rs. 20/executed order whichever is lower
                </td>
                <td className="d-none d-md-table-cell ">
                  Flat Rs. 20 per executed order
                </td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on the sell side</td>
                <td className="d-none d-md-table-cell ">
                  0.02% on the sell side
                </td>
                <td className="d-none d-md-table-cell ">
                  <ul>
                    <li>
                      0.125% of the intrinsic value on options that are bought
                      and exercised
                    </li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td>
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td className="d-none d-md-table-cell ">
                  NSE: 0.00173%
                  <br />
                  BSE: 0
                </td>
                <td className="d-none d-md-table-cell ">
                  NSE: 0.03503% (on premium)
                  <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td className="d-none d-md-table-cell ">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="d-none d-md-table-cell ">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td className="d-none d-md-table-cell ">₹10 / crore</td>
                <td className="d-none d-md-table-cell ">₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
                <td className="d-none d-md-table-cell ">
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="d-none d-md-table-cell ">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={
            Show == "currency-data"
              ? "show table-responsive"
              : "currency-data table-responsive"
          }
        >
          <table className="table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹ 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>
                  NSE: 0.00035%
                  <br />
                  BSE: 0.00045%
                </td>
                <td>
                  NSE: 0.0311% <br /> BSE: 0.001%
                </td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
                <td>0.0001% or ₹10 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className={
            Show == "commodity-data"
              ? "show table-responsive"
              : "commodity-data table-responsive"
          }
        >
          <table className="table">
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or Rs. 20/executed order whichever is lower</td>
                <td>₹ 20/executed order</td>
              </tr>
              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>
              <tr>
                <td>Transaction charges</td>
                <td>MCX: 0.0021% NSE: 0.0001%</td>
                <td>MCX: 0.0418% NSE: 0.001%</td>
              </tr>
              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>
              <tr>
                <td>SEBI charges</td>
                <td>Agri: ₹1 / crore Non-agri: ₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>
              <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200 / crore on buy side</td>
                <td>0.003% or ₹300 / crore on buy side</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div className="brokrage-link text-center">
          <p>
            <a href="" data-showcase>
              Calculate your costs upfront
            </a>{" "}
            using our brokerage calculator
          </p>
        </div>
        <div className="account-opening-charge">
          <h2>Charges for account opening</h2>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Type of account</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Online account</td>
                  <td>
                    <span className="free-tag">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td>Offline account</td>
                  <td>
                    <span className="free-tag">FREE</span>
                  </td>
                </tr>
                <tr>
                  <td>NRI account (offline only)</td>
                  <td>₹ 500</td>
                </tr>
                <tr>
                  <td>
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </td>
                  <td>₹ 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="demat-charge table-responsive">
          <h2>Demat AMC (Annual Maintenance Charge)</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Value of holdings</th>
                <th>AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>
                  <span className="free-tag">FREE</span>
                </td>
              </tr>
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td>₹ 100 per year, charged quarterly*</td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td>₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="demat-line">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <a href="" data-showcase>
            click here
          </a>
          .
        </p>
        <div className="optional-charge table-responsive">
          <h2>Charges for optional value added services</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Billing Frquency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="charge-explain">
          <h2>Charges explained</h2>
        </div>
        <div className="row end-details">
          <div className="col-12 col-md-6">
            <p className="">Securities/Commodities transaction tax</p>
            <p className="text-12">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="text-12">
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
            <p>Transaction/Turnover Charges</p>
            <p className="text-12">
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p className="text-12">
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="text-12">
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="text-12">
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p className="text-12">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
            <p>Call & trade</p>
            <p className="text-12">
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
            <p>Stamp charges</p>
            <p className="text-12">
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
            <p>NRI brokerage charges</p>
            <ul className="text-12">
              <li>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
            <p>Account with debit balance</p>
            <p className="text-12">
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
            <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
            <ul className="text-12">
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
            <p>Margin Trading Facility (MTF)</p>
            <ul className="text-12">
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6">
            <p>GST</p>
            <p className="text-12">
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <p>SEBI Charges</p>
            <p className="text-12">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
            <p>DP (Depository participant) charges</p>
            <p className="text-12">
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>
            <p className="text-12">
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>
            <p className="text-12">
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
            <p>Pledging charges</p>
            <p className="text-12">₹30 + GST per pledge request per ISIN.</p>
            <p>AMC (Account maintenance charges)</p>
            <p className="text-12">
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, Click here
            </p>
            <p className="text-12">
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, Click here
            </p>
            <p>Corporate action order charges</p>
            <p className="text-12">
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>
            <p>Off-market transfer charges</p>
            <p className="text-12">₹25 per transaction.</p>
            <p>Physical CMR request</p>
            <p className="text-12">
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
            <p>Payment gateway charges</p>
            <p className="text-12">
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
            <p>Delayed Payment Charges</p>
            <p className="text-12">
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. Learn more.
            </p>
            <p>Trading using 3-in-1 account with block functionality</p>
            <ul className="text-12">
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
        <div className="disclaimer">
          <p>Disclaimer</p>
          <p className="text-12">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}
