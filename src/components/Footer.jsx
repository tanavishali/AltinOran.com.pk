import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-diagonal">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>

        <div className="footer-content-wrapper">
          <div className="footer-top">
            <div className="footer-logo">
              {/* SVG logo */}
              <span className="logo-text">ALTIN ORAN</span>
            </div>
            <p className="footer-tagline">
              We are Relaible Professional Construction Company
            </p>
          </div>

          <div className="footer-content">
            <div className="footer-column">
              <h4>About Us</h4>
              <p>
                We are a company of highly qualified engineers & certified
                technicians dedicated to meet the diverse needs of our clients
                across multiple sectors.
              </p>
              <div className="mission-box">
                <p>
                  "Our Vision is to be the Leading Construction Company in
                  Delivering Innovative and Eco- Friendly Solutions for a
                  Better World."
                </p>
              </div>
            </div>

            <div className="footer-column">
              <h4>Explore</h4>
              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-chevron-right"></i> Home</a></li>
                {/* ... other links ... */}
                <li><a href="#Contact"><i className="fas fa-chevron-right"></i> Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-chevron-right"></i> Residential</a></li>
                {/* ... other links ... */}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Us</h4>
              {/* ... contact cards ... */}
              <div className="newsletter-box">
                <h4>Stay Updated</h4>
                <form className="newsletter-form">
                  <div className="form-input">
                    <input type="email" placeholder="Your email address" required />
                    <i className="far fa-envelope"></i>
                  </div>
                  <button type="submit" className="newsletter-btn">
                    Subscribe to Newsletter <i className="fas fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-content">
          <p className="copyright">&copy; 2025 ALTIN ORAN. All Rights Reserved.</p>
          <div className="footer-nav">
            <a href="./advanced-privacy-policy.html">Privacy Policy</a>
            <a href="./modern-tos-design.html">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;