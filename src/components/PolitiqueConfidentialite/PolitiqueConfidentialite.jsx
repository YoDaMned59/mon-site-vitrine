import React from 'react';
import './PolitiqueConfidentialite.scss';

const PolitiqueConfidentialite = () => (
  <div className="politique-confidentialite">
    <h1>Politique de confidentialité</h1>
    
    <h2>1. Collecte des informations</h2>
    <p>Nous collectons les informations suivantes :</p>
    <ul>
      <li>Données de navigation (cookies techniques essentiels)</li>
      <li>Informations de contact si vous utilisez notre formulaire (nom, email, message)</li>
    </ul>

    <h2>2. Utilisation des informations</h2>
    <p>Les informations que nous collectons sont utilisées pour :</p>
    <ul>
      <li>Améliorer la navigation sur le site</li>
      <li>Répondre à vos demandes de contact</li>
      <li>Personnaliser votre expérience utilisateur</li>
    </ul>

    <h2>3. Durée de conservation des données</h2>
    <p>Nous conservons vos données pendant une durée limitée :</p>
    <ul>
      <li>Messages de contact : 1 an maximum après le dernier échange</li>
      <li>Cookies techniques : durée de votre session de navigation</li>
      <li>Cookies analytiques (si acceptés) : 13 mois maximum</li>
    </ul>
    <p>À l'issue de ces périodes, vos données sont supprimées ou anonymisées.</p>

    <h2>4. Vos droits sur vos données</h2>
    <p>Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
    <ul>
      <li>Droit d'accès : obtenir une copie de vos données</li>
      <li>Droit de rectification : corriger des informations inexactes</li>
      <li>Droit à l'effacement : demander la suppression de vos données</li>
      <li>Droit à la limitation du traitement</li>
      <li>Droit d'opposition au traitement</li>
      <li>Droit à la portabilité de vos données</li>
    </ul>
    <p>Pour exercer ces droits, contactez-nous par email à <a href="mailto:sduviviertech@outlook.fr">sduviviertech@outlook.fr</a>. Nous nous engageons à répondre à votre demande dans un délai d'un mois.</p>

    <h2>5. Protection des informations</h2>
    <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :</p>
    <ul>
      <li>Chiffrement des communications (HTTPS)</li>
      <li>Accès restreint aux données personnelles</li>
      <li>Hébergement sécurisé en France</li>
    </ul>

    <h2>6. Cookies et outils d'analyse</h2>
    <p>Notre site utilise différents types de cookies :</p>
    <ul>
      <li>Cookies techniques essentiels : nécessaires au fonctionnement du site</li>
      <li>Cookies analytiques (Google Analytics) : uniquement si vous les acceptez</li>
    </ul>
    <p>Les outils d'analyse ne sont activés qu'après votre consentement explicite via notre bannière de cookies. Vous pouvez à tout moment modifier vos préférences en supprimant les cookies de votre navigateur.</p>

    <h3>Cookies tiers et nouvelles politiques de confidentialité</h3>
    <p>Conformément aux nouvelles politiques de confidentialité des navigateurs comme Chrome, nous limitons l'utilisation des cookies tiers. Notre implémentation de Google Analytics a été adaptée pour respecter ces nouvelles normes :</p>
    <ul>
      <li>Nous n'utilisons pas de cookies tiers pour le suivi publicitaire</li>
      <li>Les cookies analytiques sont limités aux données de première partie</li>
      <li>Nous ne partageons pas vos données avec des tiers sans votre consentement explicite</li>
      <li>Les cookies sont configurés avec des durées de vie limitées (30 jours maximum)</li>
    </ul>
    <p>Ces mesures garantissent que votre expérience de navigation reste privée tout en nous permettant d'améliorer notre site grâce à des données d'utilisation anonymes.</p>

    <h2>7. Modifications de la politique</h2>
    <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications prennent effet dès leur publication sur ce site. Nous vous encourageons à consulter régulièrement cette page.</p>

    <p style={{marginTop: '2rem', fontSize: '0.9rem', color: '#666', textAlign: 'center'}}>
      <em>Dernière mise à jour : 29/06/2025</em>
    </p>
  </div>
);

export default PolitiqueConfidentialite; 