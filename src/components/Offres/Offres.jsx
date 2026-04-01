import React from 'react';
import siteData from '../../data/siteData.json';
import './Offres.scss';

const Offres = () => {
  const { maintenancePricing } = siteData;
  const handleContactScroll = () => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="offres" id="offres">
      <h2 className="offres__title">Mes Offres</h2>
      <p className="offres__subtitle">
        Des bases claires pour votre budget, avec un devis final adapte a vos objectifs.
      </p>

      <div className="offres__list">
        <div className="offre-card">
          <h3 className="offre-card__title">Landing Page</h3>
          <p className="offre-card__price">A partir de 700 EUR</p>
          <p className="offre-card__meta">Delai moyen: 1 a 2 semaines</p>
          <ul className="offre-card__features">
            <li>1 page unique</li>
            <li>Design sur-mesure</li>
            <li>Optimisee mobile</li>
            <li>Optimisation SEO de base</li>
            <li>Formulaire de contact simple</li>
            <li>Ajustements jusqu&apos;à la mise en ligne (détaillé au devis)</li>
          </ul>
          <p className="offre-card__note">
            Hors rédaction de contenu et achats externes (nom de domaine, outils tiers).
          </p>
          <button className="btn btn-primary offre-card__cta" onClick={handleContactScroll}>
            Demander ce pack
          </button>
        </div>

        <div className="offre-card">
          <h3 className="offre-card__title">Site Vitrine 5 pages</h3>
          <p className="offre-card__price">A partir de 1 200 EUR</p>
          <p className="offre-card__meta">Delai moyen: 2 a 4 semaines</p>
          <ul className="offre-card__features">
            <li>5 pages principales</li>
            <li>Design sur-mesure</li>
            <li>Optimisation SEO de base</li>
            <li>Demande de rappel et devis</li>
            <li>Formulaire de contact avance</li>
            <li>Ajustements jusqu&apos;à la mise en ligne (détaillé au devis)</li>
          </ul>
          <p className="offre-card__note">
            Hors rédaction de contenu et achats externes (nom de domaine, outils tiers).
          </p>
          <button className="btn btn-primary offre-card__cta" onClick={handleContactScroll}>
            Demander ce pack
          </button>
        </div>
      </div>

      <div className="offres__maintenance-block">
        <h3 className="offres__maintenance-title">{maintenancePricing.title}</h3>
        <p className="offres__maintenance-intro">{maintenancePricing.intro}</p>
        <p className="offres__maintenance-lead">
          Après la mise en ligne, le suivi (petites corrections, mises à jour, évolutions) se fait en maintenance à la demande.
        </p>
        <div className="offres__maintenance-single">
          <div className="offres__maintenance-card">
            <div className="offres__maintenance-card-label">{maintenancePricing.onDemand.label}</div>
            <div className="offres__maintenance-card-price">{maintenancePricing.onDemand.price}</div>
            <p className="offres__maintenance-card-detail">{maintenancePricing.onDemand.detail}</p>
          </div>
        </div>
        <ul className="offres__maintenance-reassurance">
          {maintenancePricing.reassurance.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offres; 