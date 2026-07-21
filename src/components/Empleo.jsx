export default function Empleo() {
  return (
    <section className="sec empleo">
      <div className="wrap">
        <div className="empleo-grid">
          <div className="empleo-txt reveal">
            <div className="eyebrow on-dark">Esto no termina aquí</div>
            <h2>Seguimos contigo.</h2>
            <p className="subt">
              Te orientamos y ayudamos con tu CV y tu portfolio en LinkedIn para conectarte con
              empresas del sector.
            </p>

            <div className="hiring-card">
              <img
                className="hiring-card__img"
                alt=""
                src="https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
              <div className="hiring-card__body">
                <h3>Career &amp; Talent · Hiring Day</h3>
                <p>
                  Un evento exclusivo donde conoces empresas reales y participas en speed dating
                  con vacantes abiertas. Compañías como Desigual, CaixaBank, NTT Data o
                  Jellyfish.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-photo-alt reveal">
            <img
              alt=""
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=900"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
