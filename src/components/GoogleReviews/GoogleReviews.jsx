import { MessageSquareQuote, Star } from 'lucide-react';
import './GoogleReviews.scss';

const GoogleReviews = () => {
  const googleSearchUrl =
    'https://www.google.com/search?q=sduviviertech+avis';

  return (
    <section id="avis" className="google-reviews section">
      <div className="container">
        <div className="google-reviews__header">
          <span className="google-reviews__badge">Avis clients</span>
          <h2 className="google-reviews__title">Ils me font confiance</h2>
          <p className="google-reviews__subtitle">
            Note Google: <strong>5,0/5</strong>
          </p>
        </div>

        <article className="review-card">
          <div className="review-card__top">
            <div className="review-card__author">
              <h3>Mathilde Casiez</h3>
              <p>Avis Google</p>
            </div>
            <div className="review-card__rating" aria-label="Note 5 sur 5">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
              <span>5/5</span>
            </div>
          </div>

          <div className="review-card__quote">
            <MessageSquareQuote size={20} />
            <p>
              Excellent developpeur web. Professionnel et a l&apos;ecoute de mes
              besoins. Une collaboration tres fluide que je recommande.
            </p>
          </div>

          <div className="review-card__actions">
            <a
              href={googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Voir l&apos;avis sur Google
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GoogleReviews;
