import "./About.css"

function About() {
  return (
    <div className="a-propos">
      <h1>À propos d'Uzima Events</h1>
      <p>
        Uzima Events est une application de gestion d'événements conçue pour
        vous aider à organiser et à gérer vos événements de manière simple et
        efficace. Que vous organisiez une conférence, un mariage, un festival ou
        un événement d'entreprise, Uzima Events vous offre les outils dont vous
        avez besoin pour le réussir.
      </p>
      <h2>Fonctionnalités</h2>
      <p>
        Uzima Events propose une gamme complète de fonctionnalités pour vous
        aider à gérer vos événements, y compris :
        <ul className="about-ul">
          <li className="about-li">Gestion des invités</li>
          <li className="about-li">Gestion des inscriptions</li>
          <li className="about-li">Planification de l'emploi du temps</li>
          <li className="about-li">Gestion des bénévoles</li>
          <li className="about-li">Gestion des fournisseurs</li>
          <li className="about-li">Suivi des dépenses</li>
          <li className="about-li">Création de badges</li>
          <li className="about-li">Et bien plus encore !</li>
        </ul>
      </p>
      <h2>Notre équipe</h2>
      <p>
        Uzima Events a été fondée par une équipe de professionnels de
        l'événementiel passionnés par la technologie et l'organisation
        d'événements. Nous avons pour mission de vous offrir les outils les plus
        innovants et les plus performants pour vous aider à organiser des
        événements inoubliables.
      </p>
      <h2>Contactez-nous</h2>
      <p>
        Si vous avez des questions ou des commentaires, n'hésitez pas à nous
        contacter à l'adresse suivante :
        [contact@uzimaevents.com](mailto:contact@uzimaevents.com)
      </p>
    </div>
  );
}

export default About;
