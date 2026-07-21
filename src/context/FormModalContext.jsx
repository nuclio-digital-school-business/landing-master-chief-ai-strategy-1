import { createContext, useContext, useState, useCallback } from 'react';

const FormModalContext = createContext(null);

export function FormModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('lead'); // 'lead' | 'download'

  const openModal = useCallback((type = 'lead') => {
    setModalType(type);
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <FormModalContext.Provider value={{ isOpen, modalType, openModal, closeModal }}>
      {children}
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const ctx = useContext(FormModalContext);
  if (!ctx) throw new Error('useFormModal debe usarse dentro de <FormModalProvider>');
  return ctx;
}