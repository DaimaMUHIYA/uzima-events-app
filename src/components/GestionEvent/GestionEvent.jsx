// import React from "react";
import "./GestionEvent.css";

function GestionEvent() {
  return (
    <div className="GestionEvent">
      <div className="container">
        <div className="content-img">
          <img className="img-planner-2" src="src/assets/Planner2.png" alt="" />
        </div>
        <div className="content">
          <h2 className="heading">Facilitez la gestion de vos événements</h2>
          <p className="text">
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
