import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CookiePreferences.scss';

const CookiePreferences = ({ onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const handleReset = () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
    onClose();
    window.location.reload();
  };

  return (
    <div
      className="cookie-preferences"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
    >
      <div className="cookie-preferences__content">
        <h2 id="cookie-preferences-title">Cookies et confidentialité</h2>

        <div className="cookie-preferences__current">
          <p>
            Aucun cookie publicitaire ni outil de mesure d’audience n’est utilisé sur ce site.
            Un enregistrement local peut uniquement mémoriser le fait que vous avez lu le bandeau d’information.
          </p>
          <p>
            Détails : <Link to="/politique-confidentialite" onClick={onClose}>politique de confidentialité</Link>.
          </p>
        </div>

        <div className="cookie-preferences__reset">
          <button type="button" className="btn btn-outline" onClick={handleReset}>
            Réafficher le bandeau
          </button>
        </div>

        <div className="cookie-preferences__close">
          <button
            ref={closeRef}
            type="button"
            className="btn btn-primary"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences;
