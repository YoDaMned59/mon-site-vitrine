import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import siteData from '../../data/siteData.json';
import './Contact.scss';

const Contact = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-100px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer l'erreur quand l'utilisateur modifie le formulaire
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: siteData.contact.email, // Votre email de réception
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div
          className={`contact__header fade-in${isInView ? ' visible' : ''}`}
        >
          <h2 className="contact__title">{siteData.contact.title}</h2>
          <p className="contact__subtitle">{siteData.contact.subtitle}</p>
        </div>

        <div
          className={`contact__content fade-in${isInView ? ' visible' : ''}`}
        >
          {/* Informations de contact */}
          <div className="contact__info fade-in">
            <h3 className="contact__info-title">Parlons de votre projet</h3>
            <p className="contact__info-description">
              Je vous propose un échange gratuit de 30 minutes pour comprendre vos besoins 
              et vous proposer la meilleure solution pour votre business.
            </p>

            <div className="contact__info-items">
              <div className="contact__info-item hover-scale">
                <div className="contact__info-icon">
                  <Mail size={20} />
                </div>
                <div className="contact__info-content">
                  <h4>Email</h4>
                  <a href={`mailto:${siteData.contact.email}`}>
                    {siteData.contact.email}
                  </a>
                </div>
              </div>

              <div className="contact__info-item hover-scale">
                <div className="contact__info-icon">
                  <Phone size={20} />
                </div>
                <div className="contact__info-content">
                  <h4>Téléphone</h4>
                  <a href={`tel:${siteData.contact.phone}`}>
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="contact__info-item hover-scale">
                <div className="contact__info-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact__info-content">
                  <h4>Localisation</h4>
                  <span>France ({siteData.contact.location})</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="contact__social">
              <h4>Suivez-moi</h4>
              <div className="contact__social-links">
                {Object.entries(siteData.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link hover-scale"
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="contact__form-container fade-in">
            {!isSubmitted ? (
              <form className="contact__form" onSubmit={handleSubmit}>
                {error && (
                  <div className="contact__form-error">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}
                
                <div className="contact__form-row">
                  <div className="contact__form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre nom"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="contact__form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="contact__form-row contact__form-row--fullwidth">
                  <div className="contact__form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Décrivez votre projet ou votre besoin..."
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-primary contact__form-submit hover-scale"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : <><Send size={16} /> Envoyer</>}
                </button>
              </form>
            ) : (
              <div className="contact__form-success fade-in">
                <CheckCircle size={32} />
                <p>Merci pour votre message !<br />Je vous répondrai rapidement.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 