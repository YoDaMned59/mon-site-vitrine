import { useEffect } from 'react';

const SITE_URL = 'https://sduviviertech.fr';

export function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc && description) {
      desc.setAttribute('content', description);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);
  }, [title, description, path]);
}
