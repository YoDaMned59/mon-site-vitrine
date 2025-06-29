import React, { useState, useEffect } from 'react';
import './CookieBanner.scss';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si le consentement a déjà été donné
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    // Ici on pourrait initialiser Google Analytics si accepté
    console.log('Cookies acceptés - Analytics activé');
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    console.log('Seuls les cookies essentiels acceptés');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    
    console.log('Cookies refusés');
  };

  const handleManagePreferences = () => {
    setShowDetails(!showDetails);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <div className="cookie-banner__text">
          <h3>🍪 Gestion des cookies</h3>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
            Les cookies essentiels sont nécessaires au bon fonctionnement du site. 
            Les cookies analytiques nous aident à comprendre comment vous utilisez notre site.
          </p>
          
          {showDetails && (
            <div className="cookie-banner__details">
              <h4>Types de cookies utilisés :</h4>
              <ul>
                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site (navigation, sécurité)</li>
                <li><strong>Cookies analytiques :</strong> Nous aident à comprendre l'utilisation du site (Google Analytics)</li>
              </ul>
              <p>
                <strong>Durée de conservation :</strong> 30 jours maximum pour les cookies analytiques.
                Vous pouvez modifier vos préférences à tout moment.
              </p>
            </div>
          )}
        </div>

        <div className="cookie-banner__actions">
          <div className="cookie-banner__buttons">
            <button 
              className="btn btn-primary cookie-banner__btn"
              onClick={handleAcceptAll}
            >
              Accepter tous les cookies
            </button>
            <button 
              className="btn btn-secondary cookie-banner__btn"
              onClick={handleAcceptEssential}
            >
              Cookies essentiels uniquement
            </button>
            <button 
              className="btn btn-outline cookie-banner__btn"
              onClick={handleReject}
            >
              Refuser
            </button>
          </div>
          
          <button 
            className="cookie-banner__details-toggle"
            onClick={handleManagePreferences}
          >
            {showDetails ? 'Masquer les détails' : 'Gérer les préférences'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 