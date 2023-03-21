import React from "react";
import "./fotter.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="fotter-toggle">
            <div role="heading" aria-level="3" className="footer-column-header">
              For Clients
            </div>
            <div className="footer-accordion-content">
              <ul className="footer-list list-unstyled">
                <li className="footer-list-item">
                  <Link to="/i/how-it-works/client/"
                    className="footer-list-link"
                  >
                    How to Hire
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/talent-marketplace/" className="footer-list-link">
                    Talent Marketplace
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/services/" className="footer-list-link">
                    Project Catalog
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/staffing" className="footer-list-link">
                    Talent Scout
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/agencies" className="footer-list-link">
                    Hire an Agency
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/enterprise/" className="footer-list-link">
                    Enterprise
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/i/payroll-client/" className="footer-list-link">
                    Payroll Services
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/direct-contracts/cl" className="footer-list-link">
                    Direct Contracts
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/hire/" className="footer-list-link">
                    Hire Worldwide
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/hire/us/" className="footer-list-link">
                    Hire in the USA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="fotter-toggle">
            <div role="heading" aria-level="3" className="footer-column-header">
              For Talent
            </div>
            <div className="footer-accordion-content">
              <ul className="footer-list list-unstyled">
                <li className="footer-list-item">
                  <a
                    href="/i/how-it-works/freelancer/"
                    className="footer-list-link"
                  >
                    How to Find Work
                  </a>
                </li>
                <li className="footer-list-item">
                  <Link to="/direct-contracts" className="footer-list-link">
                    Direct Contracts
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/freelance-jobs/" className="footer-list-link">
                    Find Freelance Jobs Worldwide
                  </Link>
                </li>
                <li className="footer-list-item">
                  <a
                    href="/freelance-jobs/united-states/"
                    className="footer-list-link"
                  >
                    Find Freelance Jobs in the USA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="fotter-toggle">
            <div role="heading" aria-level="3" className="footer-column-header">
              Resources
            </div>
            <div className="footer-accordion-content">
              <ul className="footer-list list-unstyled">
                <li className="footer-list-item">
                  <Link to="/help-support" className="footer-list-link">
                    Help &amp; Support
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/success-stories" className="footer-list-link">
                    Success Stories
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/reviews" className="footer-list-link">
                    Upwork Reviews
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/resources" className="footer-list-link">
                    Resources
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/blog" className="footer-list-link">
                    Blog
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/Community" className="footer-list-link">
                    Community
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/affiliates" className="footer-list-link">
                    Affiliate Program
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/tools" className="footer-list-link">
                    Free Business tools
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="fotter-toggle">
            <div role="heading" aria-level="3" className="footer-column-header">
              Company
            </div>
            <div className="footer-accordion-content">
              <ul className="footer-list list-unstyled">
                <li className="footer-list-item">
                  <Link to="/about" className="footer-list-link">
                    About Us
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/about/team" className="footer-list-link">
                    Leadership
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/Investor-Relations" className="footer-list-link">
                    Investor Relations
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/careers" className="footer-list-link">
                    Careers
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/about/our-impact" className="footer-list-link">
                    Our Impact
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/press" className="footer-list-link">
                    Press
                  </Link>
                </li>
                <li className="footer-list-item">
                  <Link to="/about/contact" className="footer-list-link">
                    Contact Us
                  </Link>
                </li>
                <li className="footer-list-item">
                  <a
                    href="/trust-and-safety/security/"
                    className="footer-list-link"
                  >
                    Trust, Safety &amp; Security
                  </a>
                </li>
                <li className="footer-list-item">
                  <a
                    href="/documents/modern-slavery-statement"
                    className="footer-list-link"
                  >
                    Modern Slavery Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-social-container">
          <div className="footer-social-item">
            <div className="Footer-title">
              <p>Follow us</p>
            </div>
            <div className="footer-icon-list">
              <div className="iconframe">
                <a
                  href="https://www.facebook.com/upwork"
                  className="footer-social-link"
                >
                  {" "}
                  f
                </a>
              </div>
              <div className="iconframe">
                <a
                  href="https://www.facebook.com/upwork"
                  className="footer-social-link"
                >
                  {" "}
                  f
                </a>
              </div>
              <div className="iconframe">
                <a
                  href="https://www.facebook.com/upwork"
                  className="footer-social-link"
                >
                  {" "}
                  f
                </a>
              </div>
              <div className="iconframe">
                <a
                  href="https://www.facebook.com/upwork"
                  className="footer-social-link"
                >
                  {" "}
                  f
                </a>
              </div>

              <div className="iconframe">
                <a
                  href="https://www.facebook.com/upwork"
                  className="footer-social-link"
                >
                  {" "}
                  f
                </a>
              </div>
            </div>
          </div>
          <div className="footer-app-item">
            <div className="Footer-title">
              <p>Mobile app</p>
            </div>
            <div className="footer-icon-list">
              <div className="iconframe">
                <a
                  href="https://www.facebook.com/upwork"
                  className="footer-social-link"
                >
                  {" "}
                  f
                </a>
              </div>
              <div className="iconframe">
                <a
                  href="https://www.facebook.com/upwork"
                  className="footer-social-link"
                >
                  {" "}
                  f
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-line"/>

        <div className="footer-bottom-container">
          <p className="footer-copy">© 2015 - 2023 Upwork® Global Inc.</p>{" "}
          <ul className="footer-bottom-list list-unstyled">
            <li className="footer-bottom-list-item">
              <Link to="/legal" className="footer-bottom-list-link">
                Terms of Service
              </Link>
            </li>
            <li className="footer-bottom-list-item">
              <Link to="/legal#privacy" className="footer-bottom-list-link">
                Privacy Policy
              </Link>
            </li>
            <li className="footer-bottom-list-item">
              <a
                href="/legal#SupplementalPrivacyNoticeforCaliforniaResidents"
                className="footer-bottom-list-link"
              >
                CA Notice at Collection
              </a>
            </li>
            <li className="footer-bottom-list-item">
              <a
                href="javascript:"
                className="footer-bottom-list-link ot-sdk-show-settings"
              >
                Cookie Settings
              </a>
            </li>
            <li className="footer-bottom-list-item">
              <a
                href="/legal#accessibility"
                className="footer-bottom-list-link"
              >
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
