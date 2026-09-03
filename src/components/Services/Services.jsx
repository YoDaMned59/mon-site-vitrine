import { Globe, Zap, Shield, Check, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import siteData from '../../data/siteData.json';
import servicesContent from '../../data/servicesContent.json';
import { sectionPath } from '../../utils/scrollToSection';
import './Services.scss';

const ICONS = { Globe, Zap, Shield, Code };

const Services = () => {
  const getIconComponent = (iconName) => {
    const IconComponent = ICONS[iconName] || Code;
    return <IconComponent size={32} />;
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services__intro">
          <p>{servicesContent.intro}</p>
        </div>
        <div className="services__header visible">
          <h2 className="services__title">{servicesContent.title}</h2>
          <p className="services__subtitle">{servicesContent.subtitle}</p>
        </div>

        <div className="services__grid grid grid-3 visible">
          {siteData.services.map((service, index) => (
            <div
              key={service.id}
              className="service-card visible"
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
                <h4 className="service-card__features-title">{servicesContent.includedTitle}</h4>
                <ul className="service-card__features-list">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="service-card__feature visible"
                      style={{ transitionDelay: `${0.3 + (index * 0.1) + (featureIndex * 0.1)}s` }}
                    >
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link className="btn btn-primary service-card__cta" to={sectionPath('contact')}>
                {servicesContent.cardCta}
              </Link>
            </div>
          ))}
        </div>

        <div className="services__cta visible">
          <div className="services__cta-content">
            <h3 className="services__cta-title">{servicesContent.bottomCtaTitle}</h3>
            <p className="services__cta-description">{servicesContent.bottomCtaDescription}</p>
            <Link className="btn btn-primary btn-lg" to={sectionPath('contact')}>
              {servicesContent.bottomCtaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
