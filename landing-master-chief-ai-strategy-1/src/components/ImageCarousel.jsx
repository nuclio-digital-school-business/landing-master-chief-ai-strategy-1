import { useEffect, useState } from 'react';

/**
 * Carrusel simple de imágenes con fundido automático entre ellas.
 * Reutilizable en cualquier sección que necesite mostrar varias fotos
 * en el mismo espacio sin depender de ninguna librería externa.
 */
export default function ImageCarousel({ images, intervalMs = 4000 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="img-carousel">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`img-carousel__slide${i === active ? ' is-active' : ''}`}
        />
      ))}
      <div className="img-carousel__dots">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            className={`img-carousel__dot${i === active ? ' is-active' : ''}`}
            aria-label={`Ver imagen ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}