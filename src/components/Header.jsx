import { useFormModal } from '../context/FormModalContext';

export default function Header() {
  const { openModal } = useFormModal();

  return (
    <header className="topbar">
      <div className="wrap">
        <div className="logo">
          <img src="/images/logo-nuclio.png" alt="Nuclio Digital School" className="logo-img" />
        </div>
        <button type="button" className="btn btn-yellow" onClick={() => openModal()}>
          Solicita información
        </button>
      </div>
    </header>
  );
}