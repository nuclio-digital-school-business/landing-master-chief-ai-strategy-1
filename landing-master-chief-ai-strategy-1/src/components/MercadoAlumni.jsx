import Rich from './Rich';
import { CONTENT } from '../content';

const LOGOS = [
  '2c0a5736b5858bc933a15b274085512866df939d.png',
  '5cbf60d0fdf2b6d977b277d893520443540023cf.png',
  '6bbf47163703935628349109410892bb2b4b5010.png',
  '21d40fdc312dc43e4be75ec73a3c011c1dabbc3f.png',
  '41174b4e46ab978f4c980a472a6387b635e99a73.png',
  '6603312b366ab4d864d5577228581ce1de82c7a8.png',
  '7417071fb377e45dadde15a42876a432a079e737.png',
  '519083127e426c66ef97623364ba5b96d8f7662f.png',
  'c2a5e01ee63777eb18b58897d4151162ec8fa02d.png',
  'c3043b5df95b657b0684742b034ebd047c158bdc.png',
  'c9436c0d5f800c99954e5df165c0ff7df432fe12.png',
  'e9e110d442dd686b7e2a60c8b243803a94a1f71d.png',
].map((file, i) => ({ src: `/images/carrusel nuestros alumnos/${file}`, alt: `Empresa ${i + 1}` }));

export default function MercadoAlumni() {
  const { mercado } = CONTENT;

  return (
    <section className="mercado-alumni-wrap">
      <div className="wrap">
        <div className="mercado-block reveal">
          <h2 className="mercado-title">{mercado.title}</h2>
          <p className="subt">
            <Rich text={mercado.subt} />
          </p>
          <div className="salidas-chips reveal-stagger">
            {mercado.salidas.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        </div>

        <div className="alumni-block reveal" style={{ marginTop: 56 }}>
          <img
            src="/images/decoracion nuclio.png"
            alt=""
            className="why-deco why-deco--alumni"
            aria-hidden="true"
          />
          <h2 className="alumni-title">¿Dónde trabajan nuestros alumnos?</h2>
          <div className="logo-row reveal-stagger">
            {LOGOS.map((logo, i) => {
              const extraStyle = {};
              if (i === 9) extraStyle.transform = 'scaleX(-1)';
              if (i === 2 || i === 5) extraStyle.height = '46px';
              return (
                <img
                  key={logo.alt}
                  alt={logo.alt}
                  src={logo.src}
                  style={Object.keys(extraStyle).length ? extraStyle : undefined}
                />
              );
            })}
          </div>
          <img
            src="/images/decoracion nuclio.png"
            alt=""
            className="why-deco why-deco--alumni-bottom"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
