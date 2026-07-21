const SALIDAS = ['Data Analyst', 'BI Analyst', 'BI Engineer', 'Data Consultant', 'Marketing Analyst', 'Business Analyst'];

export default function Mercado() {
  return (
    <section className="sec mercado">
      <div className="wrap">
        <div className="eyebrow on-dark reveal">Salidas profesionales</div>
        <h2 className="reveal">Te formamos para el mercado, no para el aula.</h2>
        <p className="subt reveal">
          Aprenderás con <strong>datos reales</strong>, tomarás decisiones que importan y
          llegarás a un <strong>mercado que ya te está buscando</strong>.
        </p>
        <div className="salidas-chips reveal-stagger">
          {SALIDAS.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}