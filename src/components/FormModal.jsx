import { useEffect } from 'react';
import { useFormModal } from '../context/FormModalContext';
import HubspotForm from './HubspotForm';
import { CONTENT } from '../content';

const DOWNLOAD_FORM_ID = '84147449-35bb-48b6-a7f8-a7f67b84d111';

export default function FormModal() {
  const { isOpen, modalType, closeModal } = useFormModal();
  const isDownload = modalType === 'download';

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') closeModal();
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [closeModal]);

  return (
    <div
      className={`overlay${isOpen ? ' is-open' : ''}`}
      id="hs-overlay"
      onClick={(e) => {
        if (e.target.id === 'hs-overlay') closeModal();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label="Solicita información">
        <button type="button" className="modal-close" aria-label="Cerrar" onClick={closeModal}>
          &times;
        </button>

        {isDownload ? (
          <>
            <h3>
              Descarga el <strong>catálogo</strong>
            </h3>
            <p className="small">
              Máster en Chief AI Strategy.
            </p>
            {isOpen && <HubspotForm targetId="hs-form-modal-download" formId={DOWNLOAD_FORM_ID} />}
          </>
        ) : (
          <>
            <h3>Solicita información</h3>
            <p className="small">
              Déjanos tus datos y un asesor te contará precio, becas y próximas fechas.
            </p>
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
              {isOpen && <HubspotForm targetId="hs-form-modal" />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}