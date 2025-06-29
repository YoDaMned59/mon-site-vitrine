import React, { useState, useEffect } from 'react';
import './CookiePreferences.scss';

const CookiePreferences = ({ onClose }) => {
  const [consent, setConsent] = useState('');
  const [consentDate, setConsentDate] = useState('');

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    const savedDate = localStorage.getItem('cookieConsentDate');
    
    if (savedConsent) {
      setConsent(savedConsent);
    }
    if (savedDate) {
      setConsentDate(new Date(savedDate).toLocaleDateString('fr-FR'));
    }
  }, []);

  const handleUpdateConsent = (newConsent) => {
    localStorage.setItem('cookieConsent', newConsent);
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setConsent(newConsent);
    setConsentDate(new Date().toLocaleDateString('fr-FR'));
    
    if (onClose) {
      onClose();
    }
  };

  const handleResetConsent = () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
    setConsent('');
    setConsentDate('');
    
    if (onClose) {
      onClose();
    }
    
    // Recharger la page pour afficher la bannière
    window.location.reload();
  };

  const getConsentText = () => {
    switch (consent) {
      case 'all':
        return 'Tous les cookies acceptés';
      case 'essential':
        return 'Cookies essentiels uniquement';
      case 'rejected':
        return 'Cookies refusés';
      default:
        return 'Aucune préférence enregistrée';
    }
  };

  return (
    <div className="cookie-preferences">
      <div className="cookie-preferences__content">
        <h2>Gestion des cookies</h2>
        
        <div className="cookie-preferences__current">
          <h3>Préférences actuelles</h3>
          <p><strong>Statut :</strong> {getConsentText()}</p>
          {consentDate && <p><strong>Date :</strong> {consentDate}</p>}
        </div>

        <div className="cookie-preferences__options">
          <h3>Modifier vos préférences</h3>
          <div className="cookie-preferences__buttons">
            <button 
              className={`btn ${consent === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handleUpdateConsent('all')}
            >
              Accepter tous les cookies
            </button>
            <button 
              className={`btn ${consent === 'essential' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handleUpdateConsent('essential')}
            >
              Cookies essentiels uniquement
            </button>
            <button 
              className={`btn ${consent === 'rejected' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handleUpdateConsent('rejected')}
            >
              Refuser tous les cookies
            </button>
          </div>
        </div>

        <div className="cookie-preferences__reset">
          <button 
            className="btn btn-outline"
            onClick={handleResetConsent}
          >
            Réinitialiser les préférences
          </button>
          <p className="cookie-preferences__note">
            Cela supprimera vos préférences et affichera à nouveau la bannière de cookies.
          </p>
        </div>

        <div className="cookie-preferences__close">
          <button 
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