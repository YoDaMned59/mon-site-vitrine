import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import siteData from '../../data/siteData.json';
import './WhyChooseMe.scss';

const WhyChooseMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent size={24} /> : <LucideIcons.Star size={24} />;
  };

  return (
    <section id="why-choose-me" className="why-choose-me" ref={ref}>
      <div className="container">
        <motion.div
          className="why-choose-me__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="why-choose-me__title">{siteData.whyChooseMe.title}</h2>
          <p className="why-choose-me__subtitle">{siteData.whyChooseMe.subtitle}</p>
        </motion.div>

        <motion.div
          className="why-choose-me__grid grid grid-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {siteData.whyChooseMe.reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              className="reason-card"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="reason-card__icon"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {getIconComponent(reason.icon)}
              </motion.div>
              
              <h3 className="reason-card__title">{reason.title}</h3>
              <p className="reason-card__description">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Section témoignages */}
        {/* Section masquée tant qu'il n'y a pas de vrais retours clients */}

        {/* CTA final */}
        <motion.div
          className="why-choose-me__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="why-choose-me__cta-content">
            <h3>Prêt à transformer votre business ?</h3>
            <p>
              Rejoignez mes clients satisfaits et donnons vie à votre projet web.
            </p>
            <motion.button
              className="btn btn-primary btn-lg"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer votre projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe; 