// import React from "react";
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
              <button className="inscription">inscription</button>
              <button className="connexion">connexion</button>
            </div>
          </div>
          <div className="column-2">
            <img className="img-planner" src="src/assets/Planner.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
