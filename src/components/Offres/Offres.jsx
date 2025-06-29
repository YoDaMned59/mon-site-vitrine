import React from 'react';
import './Offres.scss';

const Offres = () => (
  <section className="offres" id="offres">
    <h2 className="offres__title">Mes Offres</h2>
    <div className="offres__list">
      <div className="offre-card">
        <h3 className="offre-card__title">Landing Page</h3>
        <p className="offre-card__price">700€</p>
        <ul className="offre-card__features">
          <li>1 page unique</li>
          <li>Design sur-mesure</li>
          <li>Optimisée mobile</li>
          <li>Référencement SEO de base</li>
          <li>Formulaire de contact simple</li>
        </ul>
      </div>
      <div className="offre-card">
        <h3 className="offre-card__title">Site 5 pages</h3>
        <p className="offre-card__price">1200€</p>
        <ul className="offre-card__features">
          <li>5 pages principales</li>
          <li>Design sur-mesure</li>
          <li>Référencement Optimisation SEO</li>
          <li>Demande de rappel, Devis</li>
          <li>Formulaire de contact avancée</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Offres; 