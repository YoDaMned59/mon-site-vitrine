import React from 'react';
import './MentionsLegales.scss';

const MentionsLegales = () => (
  <div className="mentions-legales">
    <h1>Mentions légales</h1>
    <h2>1. Éditeur du site</h2>
    <p>Ce site est édité par Sébastien Duvivier, auto-entrepreneur.<br/>
    Siège social : Meteren, France<br/>
    Email : <a href="mailto:sduviviertech@outlook.fr">sduviviertech@outlook.fr</a><br/>
    SIRET : 941 373 623 00011</p>
    <h2>2. Directeur de publication</h2>
    <p>Le directeur de publication est Sébastien Duvivier, auto-entrepreneur.</p>
    <h2>3. Hébergement</h2>
    <p>Ce site est hébergé par :<br/>
o2switch<br/>
Adresse : 222-224 Boulevard Gustave Flaubert - 63000 Clermont-Ferrand<br/>
Téléphone : 04 44 44 60 40</p>
    <h2>4. Propriété intellectuelle</h2>
    <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse de Sébastien Duvivier.</p>
    <h2>5. Protection des données personnelles</h2>
    <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :</p>
    <ul>
      <li>Droit d'accès à vos données personnelles</li>
      <li>Droit de rectification de vos données personnelles</li>
      <li>Droit à l'effacement de vos données personnelles</li>
      <li>Droit à la limitation du traitement</li>
      <li>Droit à la portabilité de vos données</li>
      <li>Droit d'opposition au traitement</li>
    </ul>
    <p>Pour exercer ces droits, contactez-nous à l'adresse email suivante : <a href="mailto:sduviviertech@outlook.fr">sduviviertech@outlook.fr</a></p>
    <p>Pour plus d'informations sur le traitement de vos données, consultez notre politique de confidentialité accessible depuis le footer du site.</p>
    <h2>6. Cookies</h2>
    <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. Ces cookies sont nécessaires au bon fonctionnement du site. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter le fonctionnement du site.</p>
    <p>Pour plus d'informations sur l'utilisation des cookies, consultez notre politique de confidentialité accessible depuis le footer du site.</p>
    <h2>7. Liens hypertextes</h2>
    <p>Le site peut contenir des liens hypertextes vers d'autres sites. SDuvivierTech n'est pas responsable du contenu des sites vers lesquels ces liens pointent.</p>
    <h2>8. Droit applicable</h2>
    <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
    <h2>9. Offres proposées</h2>
    <p><strong>Landing Page :</strong> Site une page à partir de 700€. Inclut : design sur-mesure, optimisation mobile, référencement SEO de base, formulaire de contact simple.</p>
    <p><strong>Site 5 pages :</strong> Site vitrine complet à partir de 1200€. Inclut : 5 pages principales, design sur-mesure, optimisation SEO, demandes de rappel et devis, formulaire de contact avancé.</p>
    <p><strong>Propriété du site :</strong> Le client reste propriétaire de l'ensemble des contenus et du nom de domaine. Le code source et les éléments graphiques réalisés sur-mesure lui sont cédés après paiement intégral des sommes dues.</p>
    <p style={{marginTop: '2rem', fontSize: '0.9rem', color: '#666', textAlign: 'center'}}>
      <em>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</em>
    </p>
  </div>
);

export default MentionsLegales; 