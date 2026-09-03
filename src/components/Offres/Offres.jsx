import { Link } from 'react-router-dom';
import siteData from '../../data/siteData.json';
import offers from '../../data/offers.json';
import { sectionPath } from '../../utils/scrollToSection';
import './Offres.scss';

const Offres = () => {
  const { maintenancePricing } = siteData;

  return (
    <section className="offres" id="offres">
      <div className="container">
        <h2 className="offres__title">Mes offres</h2>
        <p className="offres__subtitle">
          Bases tarifaires TTC, puis devis selon votre besoin. Les délais partent une fois vos textes et visuels reçus.
        </p>

        <div className="offres__list">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`offre-card${offer.featured ? ' offre-card--featured' : ''}`}
            >
              {offer.badge && <span className="offre-card__badge">{offer.badge}</span>}
              <h3 className="offre-card__title">{offer.title}</h3>
              <p className="offre-card__price">{offer.price}</p>
              <p className="offre-card__meta">{offer.delay}</p>
              <ul className="offre-card__features">
                {offer.features.map((feature, index) => (
                  <li key={`${offer.id}-${index}`}>{feature}</li>
                ))}
              </ul>
              <p className="offre-card__note">{siteData.offersNote}</p>
              <Link className="btn btn-primary offre-card__cta" to={sectionPath('contact')}>
                Demander ce pack
              </Link>
            </div>
          ))}
        </div>

        <div className="offres__maintenance-block">
          <h3 className="offres__maintenance-title">{maintenancePricing.title}</h3>
          <p className="offres__maintenance-intro">{maintenancePricing.intro}</p>
          <p className="offres__maintenance-lead">
            Après la mise en ligne, le suivi se fait à la demande : corrections, mises à jour, petites évolutions.
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
      </div>
    </section>
  );
};

export default Offres;
