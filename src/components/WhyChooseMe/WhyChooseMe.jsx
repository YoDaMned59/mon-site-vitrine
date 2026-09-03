import { Target, MessageCircle, Settings, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import siteData from '../../data/siteData.json';
import whyChooseMeContent from '../../data/whyChooseMeContent.json';
import { sectionPath } from '../../utils/scrollToSection';
import './WhyChooseMe.scss';

const ICONS = { Target, MessageCircle, Settings, Users, Star };

const WhyChooseMe = () => {
  const getIconComponent = (iconName) => {
    const IconComponent = ICONS[iconName] || Star;
    return <IconComponent size={24} />;
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
            <Link className="btn btn-primary btn-lg" to={sectionPath('contact')}>
              {whyChooseMeContent.ctaButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
