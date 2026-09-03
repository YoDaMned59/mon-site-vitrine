import { useMemo, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import siteData from '../../data/siteData.json';
import contactContent from '../../data/contactContent.json';
import './Contact.scss';

const MIN_SUBMIT_DELAY_MS = 3000;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 2000;

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
  const mountedAt = useRef(Date.now());
  const lastSubmitAt = useRef(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const fields = [
    {
      id: 'name',
      label: contactContent.form.nameLabel,
      type: 'text',
      placeholder: contactContent.form.namePlaceholder,
      maxLength: MAX_NAME,
    },
    {
      id: 'email',
      label: contactContent.form.emailLabel,
      type: 'email',
      placeholder: contactContent.form.emailPlaceholder,
      maxLength: MAX_EMAIL,
    },
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
        ),
      },
      {
        id: 'phone',
        icon: <Phone size={20} />,
        title: 'Téléphone',
        content: (
          <a href={siteData.contact.phoneHref}>
            {siteData.contact.phone}
          </a>
        ),
      },
      {
        id: 'location',
        icon: <MapPin size={20} />,
        title: 'Localisation',
        content: <span>France ({siteData.contact.location})</span>,
      },
    ],
    []
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.website.trim()) {
      setIsSubmitted(true);
      return;
    }

    if (Date.now() - mountedAt.current < MIN_SUBMIT_DELAY_MS) {
      setError(contactContent.form.error);
      return;
    }

    if (Date.now() - lastSubmitAt.current < 30000) {
      setError('Merci de patienter quelques secondes avant un nouvel envoi.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name.trim().slice(0, MAX_NAME),
          from_email: formData.email.trim().slice(0, MAX_EMAIL),
          message: formData.message.trim().slice(0, MAX_MESSAGE),
          to_email: siteData.contact.email,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        lastSubmitAt.current = Date.now();
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          website: '',
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch {
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

          <div className="contact__form-container fade-in">
            {!isSubmitted ? (
              <form className="contact__form" onSubmit={handleSubmit} noValidate={false}>
                {error && (
                  <div className="contact__form-error" role="alert">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <div className="contact__hp" aria-hidden="true">
                  <label htmlFor="website">Site web</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

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
                        maxLength={field.maxLength}
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
                      maxLength={MAX_MESSAGE}
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
