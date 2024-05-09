import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="frame-17">
          <div className="column-1">
            <h1 className="text-1">
              Découvrez Uzima Events, votre plateforme d'événements
            </h1>
            <p className="text-2">
              Trouvez et participez à des événements passionnants près de chez
              vous
            </p>
            <div className="actions">
              <Link to="/auth/register">
                <button className="inscription">Inscription</button>
              </Link>
              <Link to="/auth/login">
                <button className="connexion">Connexion</button>
              </Link>
            </div>
          </div>
          <div className="column-2">
            <img
              className="img-planner"
              src="https://res.cloudinary.com/dmzv0zqsb/image/upload/v1715108362/fjtvnduah5lxbpm6lq1i.png"
              alt="events-planner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
