import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import './NotFound.scss';

const NotFound = () => {
  usePageMeta({
    title: 'Page introuvable - SDuvivierTech',
    description: 'La page demandée n’existe pas.',
    path: '/',
  });

  return (
    <section className="not-found legal-page">
      <h1>Page introuvable</h1>
      <p>Cette adresse n’existe pas sur le site.</p>
      <Link className="btn btn-primary" to="/">
        Retour à l’accueil
      </Link>
    </section>
  );
};

export default NotFound;
