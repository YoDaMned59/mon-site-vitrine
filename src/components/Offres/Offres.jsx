import React from 'react';
import siteData from '../../data/siteData.json';
import offers from '../../data/offers.json';
import { scrollToSection } from '../../utils/scrollToSection';
import './Offres.scss';

const Offres = () => {
  const { maintenancePricing } = siteData;

  return (
    <section className="offres" id="offres">
      <h2 className="offres__title">Mes Offres</h2>
      <p className="offres__subtitle">
        Des bases tarifaires claires, puis un devis ajuste a votre besoin reel.
      </p>

      <div className="offres__list">
        {offers.map((offer) => (
          <div key={offer.id} className="offre-card">
            <h3 className="offre-card__title">{offer.title}</h3>
            <p className="offre-card__price">{offer.price}</p>
            <p className="offre-card__meta">{offer.delay}</p>
            <ul className="offre-card__features">
              {offer.features.map((feature, index) => (
                <li key={`${offer.id}-${index}`}>{feature}</li>
              ))}
            </ul>
            <p className="offre-card__note">
              Redaction des contenus et achats externes (nom de domaine, outils tiers) non inclus.
            </p>
            <button className="btn btn-primary offre-card__cta" onClick={() => scrollToSection('contact')}>
              Demander ce pack
            </button>
          </div>
        ))}
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