import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import siteData from '../../data/siteData.json';
import faqContent from '../../data/faqContent.json';
import './FAQ.scss';

const FAQ = () => {
  const [openId, setOpenId] = useState(siteData.faq[0]?.id ?? null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="faq__header">
          <h2 className="faq__title">{faqContent.title}</h2>
          <p className="faq__subtitle">{faqContent.subtitle}</p>
        </div>

        <div className="faq__list">
          {siteData.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <article key={item.id} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                <button
                  className="faq-item__question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={18} />
                </button>
                {isOpen && <p className="faq-item__answer">{item.answer}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
