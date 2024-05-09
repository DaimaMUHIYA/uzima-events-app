import { Link } from "react-router-dom";
import "./GestionEvent.css";

function GestionEvent() {
  return (
    <div className="GestionEvent">
      <div className="container">
        <div className="content-img">
          <img
            className="img-planner-2"
            src="https://res.cloudinary.com/dmzv0zqsb/image/upload/v1715108362/b3xaruxxad6clm8bnnnf.png"
            alt="management-icon"
          />
        </div>
        <div className="content">
          <h2 className="heading">Facilitez la gestion de vos événements</h2>
          <p className="text">
            Avec Uzima Events, vous pouvez facilement créer, modifier, afficher
            et supprimer des événements. Simplifiez votre processus de
            planification et de gestion des événements.
          </p>
          <div className="discovery">
            <Link to="/about">
              <button className="Découvrir">Découvrir</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GestionEvent;
