import { useEffect, useRef } from 'react';

const HS_PORTAL_ID = '5009969';
const HS_FORM_ID = '445042fa-5009-4af4-aaac-ddaff4734696';
const HS_REGION = 'na1';

// CSS que HubSpot inyecta DENTRO del iframe del formulario.
// Es la única vía soportada para estilizar un form embebido en iframe
// (el CSS/JS de la página no puede tocar el interior del iframe por CORS).
const HS_FORM_CSS = `
  body{font-family:'Manrope',-apple-system,Arial,sans-serif;}
  .hs-form-field{margin-bottom:16px;}
  .hs-form-field label{font-size:13.5px;font-weight:600;color:#333;margin-bottom:4px;display:block;}
  input.hs-input[type=text],
  input.hs-input[type=email],
  input.hs-input[type=tel],
  input.hs-input[type=number],
  select.hs-input,
  textarea.hs-input{
    width:100% !important;
    padding:15px 18px !important;
    border:1px solid #d5d5d5 !important;
    border-radius:999px !important;
    font-size:15px !important;
    line-height:1.3 !important;
    height:auto !important;
    color:#141414 !important;
    background:#fff !important;
    box-sizing:border-box !important;
    -webkit-appearance:none;
    appearance:none;
  }
  input.hs-input[type=checkbox],input.hs-input[type=radio]{width:auto;padding:0;border-radius:0;}
  .hs-input:focus{outline:none !important;border-color:#FFC630 !important;box-shadow:0 0 0 3px rgba(255,198,48,.25) !important;}
  .hs-button{background:#FFC630;color:#141414;border:0;border-radius:50px;padding:15px 26px;font-weight:700;font-size:16px;cursor:pointer;width:100%;margin-top:8px;}
  .hs-button:hover{background:#ffcf4a;}
  .legal-consent-container, .hs-richtext{font-size:11px;color:#8a8a8a!important;line-height:1.45;margin-top:6px;}
  .legal-consent-container *, .hs-richtext *{color:#8a8a8a!important;}
  .legal-consent-container a, .hs-richtext a{color:#141414!important;text-decoration:underline;}
  .hs-error-msgs label{color:#e0393e;font-size:12px;font-weight:500;}
  ul.inputs-list{list-style:none;margin:0;padding:0;}
  li.hs-form-booleancheckbox{list-style:none;}
  .hs-form-booleancheckbox-display{display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#555!important;font-weight:400;cursor:pointer;}
  .hs-form-booleancheckbox-display *{color:#555!important;}
  .hs-form-booleancheckbox-display a{color:#141414!important;text-decoration:underline;}
  .hs-form-booleancheckbox-display input.hs-input{width:auto !important;flex:0 0 auto;margin:2px 0 0 !important;float:none;padding:0 !important;border-radius:0 !important;}
  .hs-form-booleancheckbox-display span{flex:1;margin-left:0!important;display:inline!important;}

  /* Campo de teléfono internacional (selector de país + número en línea) */
  .hs-fieldtype-intl-phone.hs-input{
    padding:0 !important;
    background:none !important;
    border:none !important;
    height:auto !important;
    display:flex !important;
    gap:8px;
    width:100% !important;
  }
  .hs-fieldtype-intl-phone select.hs-input{
    width:38% !important;
    flex:0 0 38% !important;
    min-width:0 !important;
    float:none !important;
    padding-left:14px !important;
    padding-right:8px !important;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .hs-fieldtype-intl-phone input.hs-input[type=tel]{
    width:auto !important;
    min-width:0 !important;
    flex:1 !important;
    float:none !important;
  }
`;

let scriptLoadingPromise = null;
function loadHsFormsScript() {
  if (window.hbspt && window.hbspt.forms) return Promise.resolve();
  if (scriptLoadingPromise) return scriptLoadingPromise;
  scriptLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
  return scriptLoadingPromise;
}

/**
 * Embebe un formulario real de HubSpot dentro de un contenedor.
 * Oculta automáticamente el `.lead-form` (maqueta de fallback) hermano,
 * si existe, en cuanto el formulario real está listo.
 */
export default function HubspotForm({ targetId, formId = HS_FORM_ID }) {
  const containerRef = useRef(null);
  const createdRef = useRef(false);

  useEffect(() => {
    if (createdRef.current) return;
    createdRef.current = true;

    loadHsFormsScript().then(() => {
      if (!window.hbspt || !containerRef.current) return;
      window.hbspt.forms.create({
        portalId: HS_PORTAL_ID,
        formId,
        region: HS_REGION,
        target: `#${targetId}`,
        css: HS_FORM_CSS,
        onFormReady: () => {
          const el = containerRef.current;
          if (el) {
            const fallback = el.parentElement?.querySelector('.lead-form');
            if (fallback) fallback.style.display = 'none';
          }
        },
      });
    });
  }, [targetId, formId]);

  return <div id={targetId} ref={containerRef} className="hs-form-frame" />;
}