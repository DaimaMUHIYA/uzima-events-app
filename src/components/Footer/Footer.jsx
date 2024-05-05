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
            <a>Politique de confidentialité</a>
          </li>
          <li>
            <a>Conditions d'utilisation</a>
          </li>
          <li>
            <a>Paramètres des cookies</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
