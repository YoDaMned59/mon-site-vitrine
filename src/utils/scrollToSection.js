export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth' });
};

export const sectionPath = (sectionId) => `/#${sectionId}`;
