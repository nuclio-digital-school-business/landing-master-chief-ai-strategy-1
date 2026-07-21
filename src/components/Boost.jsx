const BOOST_COURSES = [
  'Web Development for No Coders',
  'Data for Business',
  'Prompt Engineering',
  'Soft skills en la gestión de personas',
];

export default function Boost() {
  return (
    <section className="sec boost">
      <div className="wrap">
        <div className="eyebrow reveal">Contenido extra</div>
        <h2 className="reveal">Y no acaba con el temario.</h2>
        <p className="subt reveal">
          Amplía tu perfil con los Boost Courses y quédate con acceso vitalicio al programa
          siempre actualizado, edición tras edición.
        </p>
        <div className="boost-grid">
          <ul className="boost-list reveal">
            {BOOST_COURSES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="boost-card reveal">
            <div className="ico">♾️</div>
            <h3>Acceso vitalicio</h3>
            <p>
              Vuelve al contenido cuando quieras y accede a cada nueva edición actualizada, sin
              coste adicional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
