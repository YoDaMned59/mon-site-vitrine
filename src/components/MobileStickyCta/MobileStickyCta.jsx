import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sectionPath } from '../../utils/scrollToSection';
import './MobileStickyCta.scss';

const MobileStickyCta = () => {
  return (
    <Link className="mobile-sticky-cta" to={sectionPath('contact')}>
      <MessageCircle size={18} />
      Demander un devis
    </Link>
  );
};

export default MobileStickyCta;
