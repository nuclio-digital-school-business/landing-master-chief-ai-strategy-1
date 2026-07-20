import HubspotForm from './HubspotForm';

/**
 * Card blanca con título + maqueta de formulario (siempre visible hasta que
 * HubSpot carga) + el formulario real de HubSpot, que se superpone y oculta
 * la maqueta en cuanto está listo.
 */
export default function ContactFormCard({
  targetId,
  title = 'Solicita información',
  subtitle = 'Habla con un asesor y resuelve todas tus dudas.',
}) {
  return (
    <div className="form-card">
      <h3>{title}</h3>
      <p className="small">{subtitle}</p>
      <div className="form-embed">
        <form className="lead-form" onSubmit={(e) => e.preventDefault()}>
          <label>Nombre y apellidos</label>
          <input type="text" placeholder="Tu nombre" />
          <label>Email</label>
          <input type="email" placeholder="tu@email.com" />
          <label>Teléfono</label>
          <input type="tel" placeholder="+34 600 000 000" />
          <button type="submit" className="btn btn-yellow">
            Solicita información
          </button>
          <p className="legal">
            Al enviar aceptas la política de privacidad de Nuclio Digital School.
          </p>
        </form>
        <HubspotForm targetId={targetId} />
      </div>
    </div>
  );
}
