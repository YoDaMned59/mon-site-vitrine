import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import navigationItems from '../../data/navigation.json';
import { scrollToSection } from '../../utils/scrollToSection';
import './Header.scss';

const Header = ({ onReturnToMain }) => {
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

  const handleSectionClick = (sectionId) => {
    // Si on est sur une page légale, d'abord retourner à la page principale
    if (onReturnToMain) {
      onReturnToMain();
      // Attendre un peu que la page se charge puis faire défiler
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
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
            onClick={() => (onReturnToMain ? onReturnToMain() : null)}
            style={{cursor: onReturnToMain ? 'pointer' : 'default'}}
          >
            <span className="header__logo-text">SDuvivier<span className="header__logo-tech">Tech</span></span>
          </div>

          {/* Navigation Desktop */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    className="header__nav-link"
                    onClick={() => handleSectionClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
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
            {navigationItems.map((item) => (
              <li key={`mobile-${item.id}`}>
                <button
                  className="header__mobile-nav-link"
                  onClick={() => handleSectionClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 