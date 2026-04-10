import React, { useMemo, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import siteData from '../../data/siteData.json';
import contactContent from '../../data/contactContent.json';
import './Contact.scss';

const ContactInfoItem = ({ icon, title, children }) => (
  <div className="contact__info-item hover-scale">
    <div className="contact__info-icon">{icon}</div>
    <div className="contact__info-content">
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const fields = [
    {
      id: 'name',
      label: contactContent.form.nameLabel,
      type: 'text',
      placeholder: contactContent.form.namePlaceholder
    },
    {
      id: 'email',
      label: contactContent.form.emailLabel,
      type: 'email',
      placeholder: contactContent.form.emailPlaceholder
    }
  ];

  const contactInfoItems = useMemo(
    () => [
      {
        id: 'email',
        icon: <Mail size={20} />,
        title: 'Email',
        content: (
          <a href={`mailto:${siteData.contact.email}`}>
            {siteData.contact.email}
          </a>
        )
      },
      {
        id: 'phone',
        icon: <Phone size={20} />,
        title: 'Téléphone',
        content: (
          <a href={`tel:${siteData.contact.phone}`}>
            {siteData.contact.phone}
          </a>
        )
      },
      {
        id: 'location',
        icon: <MapPin size={20} />,
        title: 'Localisation',
        content: <span>France ({siteData.contact.location})</span>
      }
    ],
    []
  );

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
      setError(contactContent.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header fade-in visible">
          <h2 className="contact__title">{siteData.contact.title}</h2>
          <p className="contact__subtitle">{siteData.contact.subtitle}</p>
        </div>

        <div className="contact__content fade-in visible">
          {/* Informations de contact */}
          <div className="contact__info fade-in">
            <h3 className="contact__info-title">{contactContent.infoTitle}</h3>
            <p className="contact__info-description">{contactContent.infoDescription}</p>

            <div className="contact__info-items">
              {contactInfoItems.map((item) => (
                <ContactInfoItem key={item.id} icon={item.icon} title={item.title}>
                  {item.content}
                </ContactInfoItem>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="contact__social">
              <h4>{contactContent.socialTitle}</h4>
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
                  {fields.map((field) => (
                    <div key={field.id} className="contact__form-group">
                      <label htmlFor={field.id}>{field.label}</label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        value={formData[field.id]}
                        onChange={handleInputChange}
                        required
                        placeholder={field.placeholder}
                        disabled={isSubmitting}
                      />
                    </div>
                  ))}
                </div>
                <div className="contact__form-row contact__form-row--fullwidth">
                  <div className="contact__form-group">
                    <label htmlFor="message">{contactContent.form.messageLabel}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder={contactContent.form.messagePlaceholder}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <button
                  className="btn btn-primary contact__form-submit hover-scale"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? contactContent.form.submitting : <><Send size={16} /> {contactContent.form.submit}</>}
                </button>
              </form>
            ) : (
              <div className="contact__form-success fade-in">
                <CheckCircle size={32} />
                <p>{contactContent.form.success}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 