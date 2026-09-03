import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import './PolitiqueConfidentialite.scss';

const PolitiqueConfidentialite = () => {
  usePageMeta({
    title: 'Politique de confidentialité - SDuvivierTech',
    description: 'Politique de confidentialité du site SDuvivierTech : données collectées, durées et droits RGPD.',
    path: '/politique-confidentialite',
  });

  return (
    <div className="politique-confidentialite legal-page">
      <p className="legal-page__back">
        <Link to="/">Retour au site</Link>
      </p>
      <h1>Politique de confidentialité</h1>

      <h2>1. Collecte des informations</h2>
      <p>Nous collectons uniquement les informations suivantes :</p>
      <ul>
        <li>Informations de contact si vous utilisez le formulaire (nom, email, message)</li>
        <li>Préférence d’affichage du bandeau d’information (stockée localement dans votre navigateur)</li>
      </ul>

      <h2>2. Utilisation des informations</h2>
      <p>Les informations collectées via le formulaire servent uniquement à :</p>
      <ul>
        <li>Répondre à votre demande de contact</li>
        <li>Échanger sur votre projet, si vous le souhaitez</li>
      </ul>
      <p>
        Les messages sont transmis par le service EmailJS afin d’être acheminés vers l’adresse{' '}
        <a href="mailto:sduviviertech@outlook.fr">sduviviertech@outlook.fr</a>.
      </p>

      <h2>3. Durée de conservation des données</h2>
      <ul>
        <li>Messages de contact : 1 an maximum après le dernier échange</li>
        <li>Préférence du bandeau (localStorage) : jusqu’à suppression manuelle dans le navigateur</li>
      </ul>
      <p>À l’issue de ces périodes, vos données sont supprimées ou anonymisées.</p>

      <h2>4. Vos droits sur vos données</h2>
      <p>Conformément au RGPD, vous disposez des droits suivants :</p>
      <ul>
        <li>Droit d'accès : obtenir une copie de vos données</li>
        <li>Droit de rectification : corriger des informations inexactes</li>
        <li>Droit à l'effacement : demander la suppression de vos données</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit d'opposition au traitement</li>
        <li>Droit à la portabilité de vos données</li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-nous par email à{' '}
        <a href="mailto:sduviviertech@outlook.fr">sduviviertech@outlook.fr</a>.
        Nous nous engageons à répondre dans un délai d’un mois.
      </p>

      <h2>5. Protection des informations</h2>
      <ul>
        <li>Chiffrement des communications (HTTPS)</li>
        <li>Accès restreint aux messages reçus</li>
        <li>Hébergement du site chez Vercel</li>
      </ul>

      <h2>6. Cookies et mesure d’audience</h2>
      <p>
        Ce site n’utilise pas Google Analytics, ni cookies publicitaires, ni cookies de mesure d’audience.
        Aucun traceur n’est déposé à des fins statistiques.
      </p>
      <p>
        Le bandeau d’information peut enregistrer localement (localStorage) le fait que vous l’avez lu.
        Ce stockage n’est pas un cookie publicitaire et n’identifie pas votre navigation.
      </p>

      <h2>7. Modifications de la politique</h2>
      <p>
        Cette politique peut être mise à jour. La date ci-dessous indique la dernière version publiée.
      </p>

      <p className="legal-page__updated">
        <em>Dernière mise à jour : 3 septembre 2026</em>
      </p>
    </div>
  );
};

export default PolitiqueConfidentialite;
