import React from "react";
import "./style/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top-box">
          <div className="footer-top-box-text">
            <p>
              Sweco plans and designs the sustainable communities and cities of
              the future. Together with our clients and the collective knowledge
              of our 20,000 architects, engineers and other specialists, we
              co-create solutions to address urbanisation, capture the power of
              digitalisation, and make our societies more sustainable. Sweco is
              Europe’s leading engineering and architecture consultancy, with
              sales of approximately SEK 24 billion (EUR 2.2 billion). The
              company is listed on Nasdaq Stockholm.
            </p>
            <p>
              Gjörwellsgatan 22, 112 60 Stockholm Box 34044, 100 26 Stockholm,
              Sweden Telephone: +46 8 695 60 00
            </p>
          </div>

          <div className="footer-box-card">
            <h3>Shortcuts</h3>
            <a href="#">About us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
          </div>
          <div className="footer-box-card">
            <h3>Shortcuts</h3>
            <a href="#">Business partner portal </a>
            <a href="#">About us</a>
            <a href="#">Transportation Infrastructure</a>
            <a href="#">About us</a>
            <a href="#">About us</a>
          </div>
          <div className="footer-box-card">
            <h3>Shortcuts</h3>
            <a href="#">About us</a>
            <a href="#">About us</a>
          </div>
        </div>
        <div className="footer-bottom-box">
          <ul>
            <li>
              <span>© 2023 Sweco AB</span>
            </li>
            <li>Cookie policy</li>
            <li>Data privacy</li>
            <li>Manage consent</li>
          </ul>

          <a id="btn-to-top-text" href="#top">
            Back to Top
          </a>
          <div id="footer-logo">logo</div>
        </div>
        <a href="#top">
          <button className="green-btn-arrow footer-green-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </button>
        </a>
      </footer>
    </>
  );
};

export default Footer;
