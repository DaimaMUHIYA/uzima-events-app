// import React from "react";
import "./GestionEvent.css";

function GestionEvent() {
  return (
    <div className="GestionEvent">
      <div className="container">
        <div className="column-2">
          <img className="img-planner-2" src="src/assets/Planner2.png" alt="" />
        </div>
        <div className="column-1">
          <h1 className="text-1">Facilitez la gestion de vos événements</h1>
          <p className="text-2">
            Avec Uzima Events, vous pouvez facilement créer, modifier, afficher
            et supprimer des événements. Simplifiez votre processus de
            planification et de gestion des événements.
          </p>
          <div className="discovery">
            <button className="Découvrir">Découvrir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionEvent;
