import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import './MentionsLegales.scss';

const MentionsLegales = () => {
  usePageMeta({
    title: 'Mentions légales - SDuvivierTech',
    description: 'Mentions légales du site SDuvivierTech, édité par Sébastien Duvivier.',
    path: '/mentions-legales',
  });

  return (
    <div className="mentions-legales legal-page">
      <p className="legal-page__back">
        <Link to="/">Retour au site</Link>
      </p>
      <h1>Mentions légales</h1>
      <h2>1. Éditeur du site</h2>
      <p>
        Ce site est édité par Sébastien Duvivier, auto-entrepreneur.<br />
        Siège social : Meteren, France<br />
        Email : <a href="mailto:sduviviertech@outlook.fr">sduviviertech@outlook.fr</a><br />
        SIRET : 941 373 623 00011
      </p>
      <h2>2. Directeur de publication</h2>
      <p>Le directeur de publication est Sébastien Duvivier, auto-entrepreneur.</p>
      <h2>3. Hébergement</h2>
      <p>
        Ce site est hébergé par :<br />
        Vercel Inc.<br />
        440 N Barranca Ave #4133<br />
        Covina, CA 91723<br />
        États-Unis<br />
        Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
      </p>
      <h2>4. Propriété intellectuelle</h2>
      <p>
        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sur quelque support que ce soit est formellement interdite sauf autorisation expresse de Sébastien Duvivier.
      </p>
      <h2>5. Protection des données personnelles</h2>
      <p>
        Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :
      </p>
      <ul>
        <li>Droit d'accès à vos données personnelles</li>
        <li>Droit de rectification de vos données personnelles</li>
        <li>Droit à l'effacement de vos données personnelles</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit à la portabilité de vos données</li>
        <li>Droit d'opposition au traitement</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous à l'adresse email suivante :{' '}
        <a href="mailto:sduviviertech@outlook.fr">sduviviertech@outlook.fr</a>
      </p>
      <p>
        Pour plus d'informations sur le traitement de vos données, consultez notre{' '}
        <Link to="/politique-confidentialite">politique de confidentialité</Link>.
      </p>
      <h2>6. Cookies</h2>
      <p>
        Ce site n’utilise pas de cookies publicitaires ni d’outil de mesure d’audience. Un enregistrement local (localStorage) peut mémoriser le fait que vous avez lu l’information relative aux cookies, afin de ne pas réafficher le bandeau.
      </p>
      <h2>7. Liens hypertextes</h2>
      <p>
        Le site peut contenir des liens hypertextes vers d'autres sites. SDuvivierTech n'est pas responsable du contenu des sites vers lesquels ces liens pointent.
      </p>
      <h2>8. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
      </p>
      <h2>9. Conditions commerciales</h2>
      <p>
        Les tarifs et délais en vigueur sont indiqués sur la page d’accueil. Les prix sont exprimés TTC. TVA non applicable, article 293 B du CGI.
      </p>
      <p>
        <strong>Propriété du site :</strong> le client reste propriétaire des contenus et du nom de domaine. Le code source et les éléments graphiques réalisés pour le projet lui sont cédés après paiement intégral des sommes dues.
      </p>
      <p className="legal-page__updated">
        <em>Dernière mise à jour : 3 septembre 2026</em>
      </p>
    </div>
  );
};

export default MentionsLegales;
