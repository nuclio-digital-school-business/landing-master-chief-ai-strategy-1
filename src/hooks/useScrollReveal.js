import { useEffect } from 'react';

/**
 * Observa todos los elementos con la clase `.reveal` presentes en el DOM
 * y les añade `.is-visible` en cuanto entran en el viewport, disparando
 * la animación de fade-in-up definida en index.css.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      // Sin soporte de IntersectionObserver: revela directamente
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}