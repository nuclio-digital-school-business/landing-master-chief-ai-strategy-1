import Rich from './Rich';
import { CONTENT } from '../content';

export default function Stats() {
  const { stats } = CONTENT;

  return (
    <section className="sec stats-sec">
      <img
        src="/images/decoracion nuclio.png"
        alt=""
        className="stats-deco stats-deco--tl"
        aria-hidden="true"
      />
      <img
        src="/images/decoracion nuclio.png"
        alt=""
        className="stats-deco stats-deco--br"
        aria-hidden="true"
      />
      <div className="wrap">
        <h2 className="reveal">
          {stats.h2Pre}
          <span className="stats-hl">{stats.h2Hl}</span>.
        </h2>
        <p className="subt reveal">
          <Rich text={stats.subt} />
        </p>
        <div className="stats-grid reveal-stagger">
          {stats.items.map((s) => (
            <div className="stat-card" key={s.lbl}>
              <div className="stat-card__top">
                <div className="num">{s.num}</div>
                <div className="stat-card__col">
                  <div className="lbl">{s.lbl}</div>
                  <div className="note">{s.note}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
