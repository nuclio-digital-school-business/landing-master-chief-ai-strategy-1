const LOGOS = [
  { src: '/images/AMAZON-LOGO.webp', alt: 'Amazon' },
  { src: '/images/GLOVO-LOGO.webp', alt: 'Glovo' },
  { src: '/images/NESTLE-LOGO.webp', alt: 'Nestlé' },
  { src: '/images/NTT-DATA-LOGO.webp', alt: 'NTT Data' },
  { src: '/images/PFIZER-LOGO.webp', alt: 'Pfizer' },
  { src: '/images/SEAT-LOGO-300x82-1.webp', alt: 'SEAT' },
];

export default function Trust() {
  return (
    <section className="sec trust">
      <div className="wrap">
        <div className="eyebrow reveal">Nuestros alumni</div>
        <h2 className="reveal">¿Dónde trabajan quienes ya lo hicieron?</h2>
        <div className="logo-row reveal-stagger">
          {LOGOS.map((logo) => (
            <img key={logo.alt} alt={logo.alt} src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
