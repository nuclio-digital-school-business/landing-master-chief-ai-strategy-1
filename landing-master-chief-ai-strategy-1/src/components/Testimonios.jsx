import { CONTENT } from '../content';

export default function Testimonios() {
  const { highlights } = CONTENT.testimonios;

  return (
    <section className="sec testimonios">
      <div className="wrap">
        <h2 className="reveal">
          Lo que más
          <br />
          <em className="accent">valoran</em> los estudiantes.
        </h2>
        <div className="testi-list reveal-stagger">
          {highlights.map((text, i) => (
            <div className="testi-item" key={i}>
              <img
                src="/images/nuclio-redonda-decoracion.png"
                alt=""
                className="testi-item__dot"
                aria-hidden="true"
              />
              <div>
                <p className="testi-item__text">{text}</p>
                <span className="testi-item__name">Lo más valorado del programa</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
