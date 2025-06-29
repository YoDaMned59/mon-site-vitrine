import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Globe, Zap, Users } from 'lucide-react';
import siteData from '../../data/siteData.json';
import './Hero.scss';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation d'apparition et flottante en CSS
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div 
          className={`hero__content${isInView ? ' visible' : ''}`}
          ref={ref}
        >
          {/* Contenu principal */}
          <div className="hero__main">
            <div className="hero__text fade-in">
              <div className="hero__badge fade-in hover-scale">
                <Globe size={16} />
                <span>Solutions Web sur Mesure</span>
              </div>

              <h1 className="hero__title fade-in">
                {siteData.hero.title}
                <span className="hero__title-highlight"> {siteData.hero.subtitle}</span>
              </h1>

              <p className="hero__slogan fade-in">
                {siteData.hero.slogan}
              </p>

              <p className="hero__description fade-in">
                {siteData.hero.description}
              </p>

              <div className="hero__actions fade-in">
                <button 
                  className="btn btn-primary btn-lg hero__cta hover-scale"
                  onClick={scrollToContact}
                >
                  {siteData.hero.cta}
                  <ArrowRight size={20} />
                </button>

                <button 
                  className="btn btn-secondary btn-lg hero__secondary hover-scale"
                  onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                >
                  Découvrir mes solutions
                </button>
              </div>
            </div>
          </div>

          {/* Éléments visuels */}
          <div className="hero__visual">
            <div className="hero__code-block floating">
              <div className="hero__code-header">
                <div className="hero__code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="hero__code-content">
                <pre>
                  <code>
{`// Votre projet web
const projet = {
  objectif: "Développer votre business",
  solution: "Site web sur mesure",
  resultat: "Plus de clients",
  accompagnement: "De A à Z"
};

// Prêt à transformer 
// votre vision en réalité ?`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Éléments flottants */}
            <div className="hero__floating-icon hero__floating-icon--1 floating">
              <Zap size={24} />
            </div>
            <div className="hero__floating-icon hero__floating-icon--2 floating">
              <Users size={24} />
            </div>
            <div className="hero__floating-icon hero__floating-icon--3 floating">
              <Globe size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient de fond */}
      <div className="hero__background">
        <div className="hero__gradient hero__gradient--1"></div>
        <div className="hero__gradient hero__gradient--2"></div>
        <div className="hero__gradient hero__gradient--3"></div>
      </div>
    </section>
  );
};

export default Hero; 