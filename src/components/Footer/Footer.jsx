import { Link } from 'react-router-dom';
import siteData from '../../data/siteData.json';
import offers from '../../data/offers.json';
import footerNavItems from '../../data/footerNavigation.json';
import { sectionPath } from '../../utils/scrollToSection';
import './Footer.scss';

const Footer = ({ onShowCookiePreferences }) => {
  const currentYear = new Date().getFullYear();
  const footerServices = [
    ...offers.map((offer) => ({ id: offer.id, title: offer.title })),
    { id: 'maintenance', title: siteData.maintenancePricing.title },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="SDuvivierTech, accueil">
              <span>SD</span>
            </Link>
            <p className="footer__description">
              Développeur indépendant à Meteren. Sites vitrines pour indépendants et petites entreprises, de l’idée à la mise en ligne.
            </p>
          </div>

          <div className="footer__nav">
            <h4>Navigation</h4>
            <ul className="footer__nav-list">
              {footerNavItems.map((item) => (
                <li key={`footer-${item.id}`}>
                  <Link to={sectionPath(item.id)}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__services">
            <h4>Offres</h4>
            <ul className="footer__services-list">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link to={sectionPath('offres')}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Contact</h4>
            <div className="footer__contact-info">
              <p>
                <strong>Email :</strong>
                <a href={`mailto:${siteData.contact.email}`}>
                  {siteData.contact.email}
                </a>
              </p>
              <p>
                <strong>Téléphone :</strong>
                <a href={siteData.contact.phoneHref}>
                  {siteData.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © {currentYear} Tous droits réservés. Développé en France par SDuvivierTech
            </p>
            <div className="footer__legal">
              <Link className="footer__legal-link" to="/mentions-legales">
                Mentions légales
              </Link>
              <Link className="footer__legal-link" to="/politique-confidentialite">
                Politique de confidentialité
              </Link>
              <button
                type="button"
                className="footer__legal-link"
                onClick={onShowCookiePreferences}
              >
                Gestion des cookies
              </button>
            </div>
          </div>

          <div className="footer__social">
            {Object.entries(siteData.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
