import { MessageCircle } from 'lucide-react';
import './MobileStickyCta.scss';

const MobileStickyCta = () => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="mobile-sticky-cta" onClick={handleClick}>
      <MessageCircle size={18} />
      Demander un devis
    </button>
  );
};

export default MobileStickyCta;
