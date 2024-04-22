// import {Link} from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <span className="Logo">
        <a href="/">Uzima Events</a>{" "}
      </span>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/profil">Profil</a>
        </li>
        <li>
          <a href="/evenements">Evénements</a>
        </li>
        <li>
          <a href="/a propos">A propos</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
