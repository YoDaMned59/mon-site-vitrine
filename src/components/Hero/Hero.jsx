import { ArrowRight, Banknote, Clock, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import siteData from '../../data/siteData.json';
import heroContent from '../../data/heroContent.json';
import { sectionPath } from '../../utils/scrollToSection';
import './Hero.scss';

const HIGHLIGHT_ICONS = {
  price: Banknote,
  delay: Clock,
  review: Star,
};

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__content visible">
          <div className="hero__text fade-in">
            <div className="hero__badge fade-in hover-scale">
              <MapPin size={16} aria-hidden />
              <span>{heroContent.badge}</span>
            </div>

            <h1 className="hero__title fade-in">
              {siteData.hero.title}
              <span className="hero__title-highlight">{siteData.hero.subtitle}</span>
            </h1>

            <p className="hero__description fade-in">
              {siteData.hero.description}
            </p>

            <div className="hero__actions fade-in">
              <Link
                className="btn btn-primary btn-lg hero__cta hover-scale"
                to={sectionPath('contact')}
              >
                {siteData.hero.cta}
                <ArrowRight size={20} />
              </Link>

              <Link
                className="btn btn-secondary btn-lg hero__secondary hover-scale"
                to={sectionPath('offres')}
              >
                {heroContent.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="hero__visual fade-in" aria-hidden="true">
            <div className="hero__mockup">
              <div className="hero__mockup-chrome">
                <div className="hero__mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="hero__mockup-url">{heroContent.previewUrlLabel}</span>
              </div>
              <div className="hero__mockup-site">
                <div className="hero__mockup-nav">
                  <span className="hero__mockup-brand">{heroContent.previewBrand}</span>
                  <span className="hero__mockup-links">
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                </div>
                <div className="hero__mockup-stage">
                  <p className="hero__mockup-kicker">{heroContent.previewBrand}</p>
                  <p className="hero__mockup-heading">{heroContent.previewTitle}</p>
                  <span className="hero__mockup-button">{heroContent.previewCta}</span>
                </div>
              </div>
            </div>
            <p className="hero__mockup-caption">{heroContent.previewCaption}</p>
          </div>
        </div>

        <ul className="hero__highlights">
          {heroContent.highlights.map((item) => {
            const Icon = HIGHLIGHT_ICONS[item.id];
            return (
              <li key={item.id} className="hero__highlight">
                <Icon size={16} aria-hidden />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
