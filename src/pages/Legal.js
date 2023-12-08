import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Legal = () => {
  return (
    <div style={{
      textAlign: 'left'
    }}>
        <Link to="/">Retour</Link>
      
        <h1>Mentions Légales</h1>

        <p>Ce site web est une démonstration réalisée à des fins éducatives et ne traite pas de données personnelles ni ne propose de vente.</p>

        <h2>Responsable du site</h2>
        <p>Nom de l'association : Les Noctambules</p>
        <p>Représentée par : M. John Doe</p>
        <p>Adresse de l'association : 88 Bd Lahitolle, 18000 Bourges</p>
        <p>Numéro de téléphone : 00 00 00 00 00</p>
        <p>Email : loremp@ipsum.org</p>

        <h2>Hébergement du site</h2>
        <p>Le site est hébergé sur une machine virtuelle gérée par l'association Les Noctambules.</p>

        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble du contenu présent sur ce site est la propriété exclusive de l'association Les Noctambules. Toute reproduction ou utilisation sans autorisation est interdite.</p>

        <h2>Cookies</h2>
        <p>Ce site n'utilise pas de cookies de suivi ni de collecte de données personnelles. Cependant, des cookies techniques peuvent être utilisés pour assurer le bon fonctionnement du site.</p>

        <h2>Responsabilité</h2>
        <p>L'Association Les Noctambules décline toute responsabilité quant à l'utilisation faite du contenu présent sur ce site.</p>

        <h2>Liens externes</h2>
        <p>Ce site peut contenir des liens vers des sites externes. L'Association Les Noctambules n'est pas responsable du contenu de ces sites.</p>

        <h2>Conformité au RGPD</h2>
        <p>Ce site respecte les dispositions du Règlement Général sur la Protection des Données (RGPD). Aucune donnée personnelle n'est collectée sans votre consentement explicite.</p>

        <h2>Contact</h2>
        <p>Pour toute question concernant ces mentions légales, vous pouvez contacter l'Association Les Noctambules à l'adresse email loremp@ipsum.org.</p>
    </div>
  );
};

export default Legal;