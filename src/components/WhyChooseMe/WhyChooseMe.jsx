import * as LucideIcons from 'lucide-react';
import siteData from '../../data/siteData.json';
import whyChooseMeContent from '../../data/whyChooseMeContent.json';
import { scrollToSection } from '../../utils/scrollToSection';
import './WhyChooseMe.scss';

const WhyChooseMe = () => {
  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent size={24} /> : <LucideIcons.Star size={24} />;
  };

  return (
    <section id="why-choose-me" className="why-choose-me">
      <div className="container">
        <div className="why-choose-me__header">
          <h2 className="why-choose-me__title">{siteData.whyChooseMe.title}</h2>
          <p className="why-choose-me__subtitle">{siteData.whyChooseMe.subtitle}</p>
        </div>

        <div className="why-choose-me__grid grid grid-4">
          {siteData.whyChooseMe.reasons.map((reason) => (
            <div key={reason.id} className="reason-card">
              <div className="reason-card__icon">
                {getIconComponent(reason.icon)}
              </div>

              <h3 className="reason-card__title">{reason.title}</h3>
              <p className="reason-card__description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="why-choose-me__cta">
          <div className="why-choose-me__cta-content">
            <h3>{whyChooseMeContent.ctaTitle}</h3>
            <p>{whyChooseMeContent.ctaDescription}</p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => scrollToSection('contact')}
            >
              {whyChooseMeContent.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe; 