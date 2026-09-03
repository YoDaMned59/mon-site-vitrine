import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offres from './components/Offres/Offres';
import Portfolio from './components/Portfolio/Portfolio';
import WhyChooseMe from './components/WhyChooseMe/WhyChooseMe';
import GoogleReviews from './components/GoogleReviews/GoogleReviews';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import MobileStickyCta from './components/MobileStickyCta/MobileStickyCta';
import Footer from './components/Footer/Footer';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite/PolitiqueConfidentialite';
import CookieBanner from './components/CookieBanner/CookieBanner';
import CookiePreferences from './components/CookieBanner/CookiePreferences';
import NotFound from './components/NotFound/NotFound';
import { usePageMeta } from './hooks/usePageMeta';
import { scrollToSection } from './utils/scrollToSection';
import './styles/global.scss';

function HomePage() {
  usePageMeta({
    title: 'Développeur web freelance à Meteren - SDuvivierTech',
    description:
      'Développeur web freelance à Meteren. Sites vitrines pour indépendants : landing à partir de 700 € TTC, site 5 pages à partir de 1 200 € TTC. Échange de 30 minutes sans engagement.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <Offres />
      <Portfolio />
      <WhyChooseMe />
      <GoogleReviews />
      <FAQ />
      <Contact />
      <MobileStickyCta />
    </>
  );
}

function AppShell() {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const timer = window.setTimeout(() => scrollToSection(id), 80);
      return () => window.clearTimeout(timer);
    }
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="App">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer onShowCookiePreferences={() => setShowCookiePreferences(true)} />
      <CookieBanner />
      {showCookiePreferences && (
        <CookiePreferences onClose={() => setShowCookiePreferences(false)} />
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
