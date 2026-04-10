import { MessageSquareQuote, Star } from 'lucide-react';
import googleReview from '../../data/googleReview.json';
import './GoogleReviews.scss';

const GoogleReviews = () => {
  return (
    <section id="avis" className="google-reviews section">
      <div className="container">
        <div className="google-reviews__header">
          <span className="google-reviews__badge">{googleReview.badge}</span>
          <h2 className="google-reviews__title">{googleReview.title}</h2>
          <p className="google-reviews__subtitle">
            {googleReview.subtitlePrefix} <strong>5,0/5</strong>
          </p>
        </div>

        <article className="review-card">
          <div className="review-card__top">
            <div className="review-card__author">
              <h3>{googleReview.author}</h3>
              <p>{googleReview.source}</p>
            </div>
            <div className="review-card__rating" aria-label={googleReview.ratingLabel}>
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
              <span>{googleReview.ratingText}</span>
            </div>
          </div>

          <div className="review-card__quote">
            <MessageSquareQuote size={20} />
            <p>{googleReview.quote}</p>
          </div>

          <div className="review-card__actions">
            <a
              href={googleReview.googleSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {googleReview.ctaLabel}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default GoogleReviews;
