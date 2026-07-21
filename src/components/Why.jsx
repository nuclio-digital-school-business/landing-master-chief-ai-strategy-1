import { useState } from 'react';
import { useFormModal } from '../context/FormModalContext';
import Rich from './Rich';
import { CONTENT } from '../content';

function moduleBg(index, total) {
  const t = index / (total - 1);
  const from = [255, 198, 48];
  const to = [255, 255, 255];
  const mix = (a, b) => Math.round(a + (b - a) * t);
  const [r, g, b] = [mix(from[0], to[0]), mix(from[1], to[1]), mix(from[2], to[2])];
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Why() {
  const [openIndex, setOpenIndex] = useState(0);
  const { openModal } = useFormModal();
  const { why } = CONTENT;
  const MODULES = why.modules;

  return (
    <section className="sec why">
      <div className="why-video-block">
        <video className="why-video-bg" autoPlay muted loop playsInline>
          <source src="/images/particulas-3d-1-1.mp4" type="video/mp4" />
        </video>
        <div className="why-video-overlay" />
        <img
          src="/images/decoracion-nuclio-oscuro.png"
          alt=""
          className="why-deco why-deco--br"
          aria-hidden="true"
        />
        <div className="wrap">
          <h2 className="reveal">
            {why.h2Pre}
            <strong>{why.h2Hl}</strong>
          </h2>
          <p className="subt reveal">
            <Rich text={why.subt} />
          </p>

          <div className="why-modalidades reveal" style={{ marginTop: 56 }}>
            <h2>
              Las modalidades de nuestro <strong>programa</strong>.
            </h2>
            <p className="subt">
              Pre-work de nivelación y clases 100% en directo para picar código contigo en tiempo
              real.
            </p>

            <div className="temario-pills">
              {MODULES.map((mod, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    className={`temario-pill${isOpen ? ' is-open' : ''}`}
                    key={mod.n}
                    style={{ background: moduleBg(i, MODULES.length) }}
                  >
                    <button
                      type="button"
                      className="temario-pill__trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span className="temario-pill__num">{mod.n}</span>
                      <span className="temario-pill__title">{mod.title}</span>
                      <span className="nuclio-accordion__icon" aria-hidden="true" />
                    </button>
                    <div className={`nuclio-accordion__content${isOpen ? ' is-open' : ''}`}>
                      <div className="nuclio-accordion__content-inner temario-pill__inner">
                        <p><Rich text={mod.p1} /></p>
                        <p><Rich text={mod.p2} /></p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="temario-cta">
              <button type="button" className="btn btn-yellow" onClick={() => openModal('download')}>
                Descargar plan de estudios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
