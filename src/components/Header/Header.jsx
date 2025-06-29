import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.scss';

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    // Si on est sur une page légale, d'abord retourner à la page principale
    if (props.onReturnToMain) {
      props.onReturnToMain();
      // Attendre un peu que la page se charge puis faire défiler
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigation normale sur la page principale
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMenu();
  };

  return (
    <header 
      className={`header${isScrolled ? ' header--scrolled' : ''} fade-in visible`}
    >
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div 
            className="header__logo hover-scale"
            onClick={() => props.onReturnToMain ? props.onReturnToMain() : null}
            style={{cursor: props.onReturnToMain ? 'pointer' : 'default'}}
          >
            <span className="header__logo-text">SDuvivier<span className="header__logo-tech">Tech</span></span>
          </div>

          {/* Navigation Desktop */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li>
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('hero')}
                >
                  Accueil
                </button>
              </li>
              <li>
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('services')}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('offres')}
                >
                  Offres
                </button>
              </li>
              <li>
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('why-choose-me')}
                >
                  Pourquoi moi
                </button>
              </li>
              <li>
                <button 
                  className="header__nav-link"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Bouton Menu Mobile */}
          <button 
            className="header__menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <nav 
          className={`header__mobile-nav${isMenuOpen ? ' header__mobile-nav--open' : ''} fade-in visible`}
        >
          <ul className="header__mobile-nav-list">
            <li>
              <button 
                className="header__mobile-nav-link"
                onClick={() => scrollToSection('hero')}
              >
                Accueil
              </button>
            </li>
            <li>
              <button 
                className="header__mobile-nav-link"
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button 
                className="header__mobile-nav-link"
                onClick={() => scrollToSection('offres')}
              >
                Offres
              </button>
            </li>
            <li>
              <button 
                className="header__mobile-nav-link"
                onClick={() => scrollToSection('why-choose-me')}
              >
                Pourquoi moi
              </button>
            </li>
            <li>
              <button 
                className="header__mobile-nav-link"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 