import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.scss';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem('cookieConsent', 'acknowledged');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title" aria-live="polite">
      <div className="cookie-banner__content">
        <div className="cookie-banner__text">
          <h3 id="cookie-banner-title">Cookies et confidentialité</h3>
          <p>
            Ce site n’utilise pas de cookies publicitaires ni d’outil d’analyse.
            Seul un enregistrement local peut mémoriser cette information pour ne pas réafficher ce bandeau.{' '}
            <Link to="/politique-confidentialite">Politique de confidentialité</Link>
          </p>
        </div>

        <div className="cookie-banner__actions">
          <div className="cookie-banner__buttons">
            <button
              type="button"
              className="btn btn-primary cookie-banner__btn"
              onClick={handleAcknowledge}
            >
              J’ai compris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
