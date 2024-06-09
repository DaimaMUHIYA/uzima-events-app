import { Link } from "react-router-dom";
import "./Footer.css";

import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo-container">
          <span className="Logo-Footer">
            <Link to="/">Uzima Events</Link>
          </span>
        </div>
        <div className="f-icons">
          <ul className="icon-list">
            <li>
              <a href="https://web.facebook.com/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <div className="credits-text">
          <span>© 2024 Uzima Events. Tous droits réservés.</span>
        </div>
        <ul className="footer-links">
          <li>
            <Link to="/PrivacyPolicy">Politique de confidentialité</Link>
          </li>
          <li>
            <Link to="/TermsOfUse">Conditions d&apos;utilisation</Link>
          </li>
          <li>
            <Link to="/CookiePolicy">Paramètres des cookies</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
