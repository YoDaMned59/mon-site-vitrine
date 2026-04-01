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
  const [showMentions, setShowMentions] = React.useState(false);
  const [showPolitique, setShowPolitique] = React.useState(false);
  const [showCookiePreferences, setShowCookiePreferences] = React.useState(false);

  const handleShowMentions = () => {
    setShowMentions(true);
    setShowPolitique(false);
    setShowCookiePreferences(false);
  };
  const handleShowPolitique = () => {
    setShowPolitique(true);
    setShowMentions(false);
    setShowCookiePreferences(false);
  };
  const handleShowCookiePreferences = () => {
    setShowCookiePreferences(true);
    setShowMentions(false);
    setShowPolitique(false);
  };
  const handleHideLegal = () => {
    setShowMentions(false);
    setShowPolitique(false);
    setShowCookiePreferences(false);
  };

  return (
    <div className="App">
      <Header onReturnToMain={showMentions || showPolitique ? handleHideLegal : null} />
      <main>
        {showMentions ? (
          <>
            <button onClick={handleHideLegal} style={{marginBottom: '2rem'}}>Retour au site</button>
            <MentionsLegales />
          </>
        ) : showPolitique ? (
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
