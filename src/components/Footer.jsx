import React from "react";
import "../styles/footer.scss";
function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="address">
          <h3>ADDRESS /</h3>
          <p>Gammel Køngevej 3E</p>
          <p>1610 Kobenhavn V</p>
          <p>Danmark</p>
          <p>VAT: DK20212209</p>
        </div>
        <div className="contact">
          <h3>CONTACT /</h3>
          <p>+45 33 42 21 00</p>
          <p>connect@adviceagency.com</p>
        </div>

        <div className="social">
          <h3>SOCIAL /</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
        </div>
      </footer>
      <div className="copyright">&copy; 2022 M / Þ</div>
    </>
  );
}

export default Footer;
