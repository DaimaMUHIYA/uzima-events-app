import "./PrivacyPolicy.css"

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1>Politique de confidentialité</h1>
      <p>
        Chez Uzima Events, nous nous engageons à protéger votre vie privée.
        Cette politique de confidentialité décrit les données personnelles que
        nous collectons, la manière dont nous les utilisons et les droits que
        vous avez concernant ces données lorsque vous utilisez notre application
        de gestion d'événements.
      </p>
      <h2>Collecte des données personnelles</h2>
      <p>
        Lorsque vous utilisez notre application, nous pouvons collecter les
        types de données personnelles suivants :
        <ul className="daima">
          <li>Données d'inscription</li>
          <li>Données d'événement</li>
          <li>Données de communication</li>
          <li>Données d'utilisation</li>
        </ul>
      </p>
      <h2>Utilisation des données personnelles</h2>
      <p>
        Nous utilisons les données personnelles que nous collectons aux fins
        suivantes :
        <ul className="daima">
          <li>Pour fournir et améliorer notre service</li>
          <li>Pour communiquer avec vous</li>
          <li>Pour des finalités de marketing et d'analyse</li>
        </ul>
      </p>
      <h2>Partage des données personnelles</h2>
      <p>
        Nous ne partageons pas vos données personnelles avec des tiers, sauf
        dans les cas suivants :
        <ul className="daima">
          <li>Prestataires de services</li>
          <li>Conformité légale</li>
        </ul>
      </p>
      <h2>Sécurité des données</h2>
      <p>
        Nous prenons des mesures techniques et organisationnelles appropriées
        pour protéger vos données personnelles contre la perte, le vol et
        l'utilisation abusive.
      </p>
      <h2>Vos droits</h2>
      <p>
        Vous disposez de certains droits concernant vos données personnelles, y
        compris le droit d'accéder, de corriger, de supprimer et de vous opposer
        au traitement de vos données.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
