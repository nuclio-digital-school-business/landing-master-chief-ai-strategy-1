import { CONTENT } from '../content';

// Si una landing no tiene foto real del director/a todavía, se usa el
// logo de Nuclio como placeholder neutro (nunca la foto de otra persona).
const FALLBACK_IMG = '/images/logo-nuclio.png';

export default function Docentes() {
  const { director, team } = CONTENT.docentes;
  const directorImg = director.img || FALLBACK_IMG;

  return (
    <section className="sec docentes">
      <img
        src="/images/decoracion-nuclio-logo.png"
        alt=""
        className="docentes-deco"
        aria-hidden="true"
      />
      <div className="wrap">
        <h2 className="reveal">Aprende de los mejores <strong>profesionales</strong>.</h2>
        <p className="subt reveal">
          Nuestros docentes no explican teoría de manual: aplican esto a diario en algunas de
          las mejores empresas del mercado y traen esos casos reales a clase.
        </p>

        <h3 className="docentes-subhead reveal">Dirección del máster</h3>
        <div className="director-card reveal">
          <img className="director-card__ava" src={directorImg} alt={director.name} />
          <div>
            <h4>
              {director.name}
              {director.linkedin && (
                <a href={director.linkedin} target="_blank" rel="noopener noreferrer" className="director-card__linkedin">
                  {' '}
                  in
                </a>
              )}
            </h4>
            <p className="director-card__role">{director.role}</p>
            <p className="director-card__bio">{director.bio}</p>
          </div>
        </div>

        {team && team.length > 0 && (
          <>
            <h3 className="docentes-subhead reveal">Equipo docente</h3>
            <div className="docentes-team-grid reveal-stagger">
              {team.map((t) => (
                <div className="docente-card" key={t.name}>
                  <img className="docente-card__ava" src={t.img || FALLBACK_IMG} alt={t.name} />
                  <div>
                    <h4>
                      {t.name}
                      {t.linkedin && (
                        <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="docente-card__linkedin">
                          {' '}
                          in
                        </a>
                      )}
                    </h4>
                    <p className="docente-card__role">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
