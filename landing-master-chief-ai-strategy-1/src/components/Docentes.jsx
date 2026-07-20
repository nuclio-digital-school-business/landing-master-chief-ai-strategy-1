import { CONTENT } from '../content';

// TODO (Núria/equipo diseño): sustituir por foto real del director/a.
// Se deja el logo de Nuclio como placeholder neutro: no había forma de
// extraer automáticamente la foto real (nuclio.school la carga en
// diferido / lazy-load y no es accesible por fetch de texto).
const DIRECTOR_IMG = '/images/logo-nuclio.png';

export default function Docentes() {
  const { director } = CONTENT.docentes;

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
          <img className="director-card__ava" src={DIRECTOR_IMG} alt={director.name} />
          <div>
            <h4>{director.name}</h4>
            <p className="director-card__role">{director.role}</p>
            <p className="director-card__bio">{director.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
