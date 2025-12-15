import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-container">
      <div className="row footer-section-one g-0 ">
        <div className="col-12 col-md section-columns">
          <img src="/media/logo.svg" alt="" />
          <p>©2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.</p>
        </div>
        <div className="col-12 col-md section-columns">
          <ul className="">  
            <li className="list-head">Account</li>
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>
        <div className="col-12 col-md section-columns">
          <ul>
            <li className="list-head">Support</li>
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>
        <div className="col-12 col-md section-columns">
          <ul>
            <li className="list-head">Company</li>
            <li>About</li>
            <li>Philosophy</li>
            <li>Press & media</li>
            <li>Careers</li>
            <li>Zerodha Cares (CSR)</li>
            <li>Zerodha.tech</li>
            <li>Open source</li>
          </ul>
        </div>
        <div className="col-12 col-md section-columns">
          <ul>
            <li className="list-head">Quick links</li>
            <li>Upcoming IPOs</li>
            <li>Brokerage charges</li>
            <li>Market holidays</li>
            <li>Economic calendar</li>
            <li>Calculators</li>
            <li>Markets</li>
            <li>Sectors</li>
          </ul>
        </div>
      </div>
      <div className="row small-print">
        <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="" data-showcase>complaints@zerodha.com</a>, for DP related to <a href="" data-showcase>dp@zerodha.com.</a> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on <a href="" data-showcase>SEBI SCORES:</a> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p><a href="" data-showcase>Smart Online Dispute Resolution</a> | <a href="" data-showcase>Grievances Redressal Mechanism</a></p>

        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

        <p>India's largest broker based on networth as per NSE. <a href="" data-showcase>NSE broker factsheet</a></p>

        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="" data-showcase>create a ticket here.</a></p>

      </div>
      <div className="row foot-graveyard text-start text-md-center ">
        <ul>
          <li><a href="" data-showcase>NSE</a></li>
          <li><a href="" data-showcase>BSE</a></li>
          <li><a href="" data-showcase>MCX</a></li>
          <li><a href="" data-showcase>Terms & conditions</a></li>
          <li><a href="" data-showcase>Policies & procedures</a></li>
          <li><a href="" data-showcase>Privacy policy</a></li>
          <li><a href="" data-showcase>Disclosure</a></li>
          <li><a href="" data-showcase>For investor's attention</a></li>
          <li><a href="" data-showcase>Investor charter</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;