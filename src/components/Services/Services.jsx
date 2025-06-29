import React, { useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import siteData from '../../data/siteData.json';
import './Services.scss';

const Services = () => {
  const ref = useRef(null);
  // Simule l'effet d'apparition avec IntersectionObserver
  const [isInView, setIsInView] = React.useState(false);
  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '-100px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent size={32} /> : <LucideIcons.Code size={32} />;
  };

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <div className={`services__header${isInView ? ' visible' : ''}`}>
          <h2 className="services__title">Mes Services</h2>
          <p className="services__subtitle">
            Des solutions sur mesure pour transformer vos idées en applications web performantes
          </p>
        </div>

        <div className={`services__grid grid grid-3${isInView ? ' visible' : ''}`}> 
          {siteData.services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card${isInView ? ' visible' : ''}`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="service-card__header">
                <div className="service-card__icon">
                  {getIconComponent(service.icon)}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
              </div>

              <p className="service-card__description">
                {service.description}
              </p>

              <div className="service-card__features">
                <h4 className="service-card__features-title">Ce que j'inclus :</h4>
                <ul className="service-card__features-list">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={`service-card__feature${isInView ? ' visible' : ''}`}
                      style={{ transitionDelay: `${0.3 + (index * 0.1) + (featureIndex * 0.1)}s` }}
                    >
                      <LucideIcons.Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="btn btn-primary service-card__cta"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Démarrer ce service
              </button>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className={`services__cta${isInView ? ' visible' : ''}`}>
          <div className="services__cta-content">
            <h3 className="services__cta-title">
              Besoin d'une solution personnalisée ?
            </h3>
            <p className="services__cta-description">
              Chaque projet est unique. Discutons de vos besoins spécifiques et créons ensemble la solution parfaite.
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Discuter de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 