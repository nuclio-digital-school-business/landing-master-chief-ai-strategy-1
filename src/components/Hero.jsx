import { useFormModal } from '../context/FormModalContext';
import ContactFormCard from './ContactFormCard';
import Rich from './Rich';
import { CONTENT } from '../content';

export default function Hero() {
  const { openModal } = useFormModal();
  const { hero } = CONTENT;

  return (
    <section className="hero sec" id="top">
      <div className="testi-bg-carousel hero-bg-carousel" aria-hidden="true">
        <img className="testi-bg-photo" alt="" src="/images/942f21bb89422ca0596291577fca85909068670c.jpg" />
        <img className="testi-bg-photo" alt="" src="/images/a196044a80f19550f42b089d84d01c5a5704d4a5.jpg" />
        <img className="testi-bg-photo" alt="" src="/images/hiring-day/WelcomeWeek-254.jpg" />
      </div>
      <div className="wrap">
        <div className="hero-inner">
          <span className="kicker load-in load-in-1">{hero.kicker}</span>
          <h1 className="load-in load-in-2">
            {hero.h1Pre}<span className="hl">{hero.h1Hl}</span>{hero.h1Post}
          </h1>
          <p className="lead load-in load-in-3">
            <Rich text={hero.lead} />
          </p>
          <button type="button" className="btn btn-yellow load-in load-in-3" onClick={() => openModal()}>
            Habla con un asesor
          </button>

          <div className="info-row load-in load-in-4">
            <span className="info-pill">{hero.pillWeeks}</span>
            <span className="info-pill">{hero.pillModality}</span>
            <span className="info-pill">{hero.pillLocation}</span>
          </div>
        </div>

        <div className="hero-bottom load-in load-in-5">
          <div className="hero-fundae-row">
            <p className="hero-fundae">Bonificable Fundae</p>
            <img src="/images/fundae.png" alt="FUNDAE" className="fundae-logo" />
          </div>
          <p className="hero-accred">
            Acreditación universitaria de EUNEIZ disponible bajo solicitud expresa.
          </p>
        </div>

        <div className="hero-mobile-form load-in load-in-5">
          <ContactFormCard targetId="hs-form-hero-mobile" />
        </div>
      </div>
    </section>
  );
}
