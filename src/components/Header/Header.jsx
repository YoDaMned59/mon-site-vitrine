import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import navigationItems from '../../data/navigation.json';
import { scrollToSection, sectionPath } from '../../utils/scrollToSection';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSectionClick = (event, sectionId) => {
    closeMenu();
    if (location.pathname === '/') {
      event.preventDefault();
      scrollToSection(sectionId);
      window.history.replaceState(null, '', sectionPath(sectionId));
    }
  };

  return (
    <header
      className={`header${isScrolled ? ' header--scrolled' : ''} fade-in visible`}
    >
      <div className="container">
        <div className="header__content">
          <Link
            to="/"
            className="header__logo hover-scale"
            aria-label="SDuvivierTech, retour à l'accueil"
            onClick={closeMenu}
          >
            <span className="header__logo-text">
              SDuvivier<span className="header__logo-tech">Tech</span>
            </span>
          </Link>

          <nav className="header__nav" aria-label="Navigation principale">
            <ul className="header__nav-list">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    className="header__nav-link"
                    to={sectionPath(item.id)}
                    onClick={(event) => handleSectionClick(event, item.id)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="header__menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`header__mobile-nav${isMenuOpen ? ' header__mobile-nav--open' : ''} fade-in visible`}
          aria-label="Navigation mobile"
          hidden={!isMenuOpen}
        >
          <ul className="header__mobile-nav-list">
            {navigationItems.map((item) => (
              <li key={`mobile-${item.id}`}>
                <Link
                  className="header__mobile-nav-link"
                  to={sectionPath(item.id)}
                  onClick={(event) => handleSectionClick(event, item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
