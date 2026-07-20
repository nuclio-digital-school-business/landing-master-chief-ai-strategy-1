import { useState } from 'react';
import { useFormModal } from '../context/FormModalContext';

const MODULES = [
  {
    n: 'Pre',
    title: 'Data Pre-Work',
    body: (
      <>
        <p>
          Antes de comenzar el bootcamp tendrás acceso a varios pre-cursos online para
          prepararte y empezar con una base sólida.
        </p>
        <p>
          Repasarás desde cero los fundamentos de programación con <strong>Python y SQL</strong>,
          así como conceptos clave de <strong>estadística aplicada al análisis de datos</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'M1',
    title: 'Introducción a Data Analytics y la revolución de los datos',
    body: (
      <>
        <p>
          Descubre el papel de los datos en las empresas y cómo el análisis de datos impulsa la
          toma de decisiones estratégicas.
        </p>
        <p>
          Explorarás la evolución del <strong>Data Analytics</strong>, los conceptos clave del
          sector, la ética y privacidad en el uso de datos y una introducción a{' '}
          <strong>bases de datos, Big Data y Machine Learning</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'M2',
    title: 'Python 101',
    body: (
      <>
        <p>
          Aprende los fundamentos de programación en Python y cómo utilizar este lenguaje para
          trabajar con datos.
        </p>
        <p>
          Trabajarás variables, estructuras de control, funciones y manejo de archivos, además de
          librerías esenciales como <strong>NumPy y Pandas</strong> para el análisis y
          tratamiento de datos.
        </p>
      </>
    ),
  },
  {
    n: 'M3',
    title: 'Statistical Thinking',
    body: (
      <>
        <p>
          Desarrolla una base sólida en estadística para interpretar datos con criterio y
          comunicar resultados de forma efectiva.
        </p>
        <p>
          Aprenderás <strong>estadística descriptiva, probabilidad, correlación y
          significancia</strong>, además de crear visualizaciones con <strong>Matplotlib</strong>{' '}
          para explorar datos.
        </p>
      </>
    ),
  },
  {
    n: 'M4',
    title: 'Análisis exploratorio de datos',
    body: (
      <>
        <p>
          Aprende a limpiar, transformar y analizar datos procedentes de diferentes fuentes para
          extraer información relevante.
        </p>
        <p>
          Trabajarás técnicas de <strong>data cleaning, transformación de datos y análisis
          exploratorio</strong>, pasando del análisis a la toma de decisiones.
        </p>
      </>
    ),
  },
  {
    n: 'M5',
    title: 'SQL para Data Analysts',
    body: (
      <>
        <p>
          Domina SQL para consultar, filtrar y manipular datos en bases de datos de forma
          eficiente.
        </p>
        <p>
          Aprenderás a trabajar con <strong>queries, funciones de agregación, filtros y
          ordenación</strong>, además de introducirte en{' '}
          <strong>BigQuery, bases de datos NoSQL y MongoDB</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'M6',
    title: 'Dataviz: herramientas y dashboards',
    body: (
      <>
        <p>Aprende a comunicar datos de forma clara mediante visualización y storytelling.</p>
        <p>
          Diseñarás <strong>dashboards y reports</strong> con herramientas como{' '}
          <strong>Looker Studio</strong>, trabajarás <strong>KPIs</strong> y descubrirás buenas
          prácticas de visualización de datos.
        </p>
      </>
    ),
  },
  {
    n: 'M7',
    title: 'ChatGPT y LLMs en análisis de datos',
    body: (
      <>
        <p>Descubre cómo los modelos de lenguaje pueden acelerar el trabajo de análisis de datos.</p>
        <p>
          Explorarás <strong>prompt engineering</strong>, herramientas basadas en{' '}
          <strong>LLMs</strong> y cómo aplicar estas tecnologías para analizar datos de forma más
          rápida y eficiente.
        </p>
      </>
    ),
  },
  {
    n: 'M8',
    title: 'Introducción a Machine Learning & IA',
    body: (
      <>
        <p>
          Conoce los fundamentos del Machine Learning y cómo se aplican los modelos predictivos
          en el análisis de datos.
        </p>
        <p>
          Aprenderás los principales <strong>algoritmos, técnicas y herramientas</strong>, además
          de evaluar modelos y entender sus sesgos y aplicaciones.
        </p>
      </>
    ),
  },
  {
    n: 'M9',
    title: 'Desafíos y tendencias en el mercado de datos',
    body: (
      <>
        <p>
          Explora las principales tendencias del sector y cómo posicionarte profesionalmente en
          el mercado de datos.
        </p>
        <p>
          Aprenderás a crear tu <strong>portfolio en GitHub</strong>, conocerás aspectos legales y
          éticos del uso de datos y descubrirás las diferentes salidas profesionales en{' '}
          <strong>Data Analytics</strong>.
        </p>
      </>
    ),
  },
  {
    n: 'PF',
    title: 'Proyecto Final',
    body: (
      <>
        <p>Pon en práctica todo lo aprendido desarrollando un proyecto real de análisis de datos.</p>
        <p>
          Trabajarás en equipo para analizar una problemática real, aplicar pensamiento
          estadístico, trabajar con bases de datos y comunicar insights mediante{' '}
          <strong>data storytelling</strong>, con el acompañamiento de profesionales del sector.
        </p>
      </>
    ),
  },
];

// Degradado de amarillo a blanco a lo largo de toda la lista de módulos
function moduleBg(index, total) {
  const t = index / (total - 1);
  const from = [255, 198, 48];
  const to = [255, 255, 255];
  const mix = (a, b) => Math.round(a + (b - a) * t);
  const [r, g, b] = [mix(from[0], to[0]), mix(from[1], to[1]), mix(from[2], to[2])];
  return `rgb(${r}, ${g}, ${b})`;
}

export default function Temario() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openModal } = useFormModal();

  return (
    <section className="sec temario">
      <div className="wrap">
        <div className="eyebrow">El programa</div>
        <h2>Módulo a módulo.</h2>
        <p className="subt">
          Pre-work de nivelación y clases 100% en directo para picar código contigo en tiempo
          real.
        </p>

        <div className="temario-pills reveal">
          {MODULES.map((mod, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                className={`temario-pill${isOpen ? ' is-open' : ''}`}
                key={mod.n}
                style={{ background: moduleBg(i, MODULES.length) }}
              >
                <button
                  type="button"
                  className="temario-pill__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="temario-pill__num">{mod.n}</span>
                  <span className="temario-pill__title">{mod.title}</span>
                  <span className="nuclio-accordion__icon" aria-hidden="true" />
                </button>
                <div className={`nuclio-accordion__content${isOpen ? ' is-open' : ''}`}>
                  <div className="nuclio-accordion__content-inner temario-pill__inner">
                    {mod.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="temario-cta">
          <button type="button" className="btn btn-yellow" onClick={() => openModal('download')}>
            Descargar plan de estudios
          </button>
        </div>
      </div>
    </section>
  );
}