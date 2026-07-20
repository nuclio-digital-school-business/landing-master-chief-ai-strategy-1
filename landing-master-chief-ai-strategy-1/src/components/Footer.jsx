import { CONTENT } from '../content';

export default function Footer() {
  return (
    <div className="foot">
      <div className="wrap">
        <div className="logo">
          <img src="/images/logo-nuclio.png" alt="Nuclio Digital School" className="logo-img" />
        </div>
        <p>{CONTENT.footerLine}</p>
        <p>Formación bonificable a través de FUNDAE. Plazas limitadas por edición.</p>
        <p>
          <a href="mailto:hello@nuclio.school">hello@nuclio.school</a> ·{' '}
          <a href="https://www.nuclio.school" target="_blank" rel="noopener noreferrer">
            www.nuclio.school
          </a>
        </p>
      </div>
    </div>
  );
}
