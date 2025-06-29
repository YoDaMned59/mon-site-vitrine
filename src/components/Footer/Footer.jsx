import siteData from '../../data/siteData.json';
import './Footer.scss';

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo et description */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span>SD</span>
            </div>
            <p className="footer__description">
              Développeur freelance passionné par la création d'expériences web exceptionnelles.
              Transformons vos idées en réalité digitale.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="footer__nav">
            <h4>Navigation</h4>
            <ul className="footer__nav-list">
              <li>
                <button onClick={() => scrollToSection('hero')}>
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')}>
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('why-choose-me')}>
                  Pourquoi moi
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__services">
            <h4>Services</h4>
            <ul className="footer__services-list">
              {siteData.services.map(service => (
                <li key={service.id}>
                  <span>{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4>Contact</h4>
            <div className="footer__contact-info">
              <p>
                <strong>Email:</strong>
                <a href={`mailto:${siteData.contact.email}`}>
                  {siteData.contact.email}
                </a>
              </p>
              <p>
                <strong>Téléphone:</strong>
                <a href={`tel:${siteData.contact.phone}`}>
                  {siteData.contact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer__divider"></div>

        {/* Bas de page */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © {currentYear} Tous droits réservés. Développé en France par SDuvivierTech
            </p>
            <div style={{marginTop: '0.5rem'}}>
              <button className="footer__mentions-link" onClick={props.onShowMentions} style={{background:'none',border:'none',color:'#0056b3',textDecoration:'underline',cursor:'pointer',padding:0,marginRight:'1rem'}}>Mentions légales</button>
              <button className="footer__politique-link" onClick={props.onShowPolitique} style={{background:'none',border:'none',color:'#0056b3',textDecoration:'underline',cursor:'pointer',padding:0,marginRight:'1rem'}}>Politique de confidentialité</button>
              <button className="footer__cookies-link" onClick={props.onShowCookiePreferences} style={{background:'none',border:'none',color:'#0056b3',textDecoration:'underline',cursor:'pointer',padding:0}}>Gestion des cookies</button>
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