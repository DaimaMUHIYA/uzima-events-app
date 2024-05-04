import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <span className="Logo">
        <Link to="/">Uzima Events</Link>{" "}
      </span>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
        <li>
          <Link to="/evenements">Evénements</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
