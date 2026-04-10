import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Offres from './components/Offres/Offres';
import Portfolio from './components/Portfolio/Portfolio';
import WhyChooseMe from './components/WhyChooseMe/WhyChooseMe';
import GoogleReviews from './components/GoogleReviews/GoogleReviews';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import MobileStickyCta from './components/MobileStickyCta/MobileStickyCta';
import Footer from './components/Footer/Footer';
import BubblesBackground from './components/BubblesBackground/BubblesBackground';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite/PolitiqueConfidentialite';
import CookieBanner from './components/CookieBanner/CookieBanner';
import CookiePreferences from './components/CookieBanner/CookiePreferences';
import React from 'react';
import './styles/global.scss';

function App() {
  const [legalView, setLegalView] = React.useState(null);
  const [showCookiePreferences, setShowCookiePreferences] = React.useState(false);

  const handleShowMentions = () => setLegalView('mentions');
  const handleShowPolitique = () => setLegalView('politique');
  const handleShowCookiePreferences = () => {
    setShowCookiePreferences(true);
    setLegalView(null);
  };
  const handleHideLegal = () => {
    setLegalView(null);
    setShowCookiePreferences(false);
  };

  return (
    <div className="App">
      <Header onReturnToMain={legalView ? handleHideLegal : null} />
      <main>
        {legalView === 'mentions' ? (
          <>
            <button onClick={handleHideLegal} style={{marginBottom: '2rem'}}>Retour au site</button>
            <MentionsLegales />
          </>
        ) : legalView === 'politique' ? (
          <>
            <button onClick={handleHideLegal} style={{marginBottom: '2rem'}}>Retour au site</button>
            <PolitiqueConfidentialite />
          </>
        ) : (
          <>
            <Hero />
            <Services />
            <Offres />
            <Portfolio />
            <WhyChooseMe />
            <GoogleReviews />
            <FAQ />
            <Contact />
            <MobileStickyCta />
          </>
        )}
      </main>
      <BubblesBackground />
      <Footer onShowMentions={handleShowMentions} onShowPolitique={handleShowPolitique} onShowCookiePreferences={handleShowCookiePreferences} />
      <CookieBanner />
      {showCookiePreferences && (
        <CookiePreferences onClose={handleHideLegal} />
      )}
    </div>
  );
}

export default App;
