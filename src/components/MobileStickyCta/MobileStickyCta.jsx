import { MessageCircle } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollToSection';
import './MobileStickyCta.scss';

const MobileStickyCta = () => {
  return (
    <button className="mobile-sticky-cta" onClick={() => scrollToSection('contact')}>
      <MessageCircle size={18} />
      Demander un devis
    </button>
  );
};

export default MobileStickyCta;
