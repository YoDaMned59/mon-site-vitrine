import { ExternalLink } from 'lucide-react';
import siteData from '../../data/siteData.json';
import './Portfolio.scss';

const Portfolio = () => {
  const { title, subtitle, projects, comingSoon } = siteData.portfolio;

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="portfolio__header">
          <h2 className="portfolio__title">{title}</h2>
          <p className="portfolio__subtitle">{subtitle}</p>
        </div>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <article key={project.id} className="portfolio-card portfolio-card--project">
              <span className="portfolio-card__type">{project.type}</span>
              <h3 className="portfolio-card__title">{project.title}</h3>
              <p className="portfolio-card__tagline">{project.tagline}</p>
              <p className="portfolio-card__excerpt">{project.excerpt}</p>
              <a
                className="btn btn-secondary portfolio-card__link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.urlLabel}
                <ExternalLink size={16} aria-hidden />
              </a>
            </article>
          ))}

          {comingSoon.map((item) => (
            <div key={`placeholder-${item.id}`} className="portfolio-card portfolio-card--placeholder">
              <h4 className="portfolio-card__placeholder-title">{item.title}</h4>
              <p className="portfolio-card__placeholder-text">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
