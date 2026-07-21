import { FormModalProvider } from './context/FormModalContext';
import useScrollReveal from './hooks/useScrollReveal';
import Header from './components/Header';
import RailForm from './components/RailForm';
import Hero from './components/Hero';
import Docentes from './components/Docentes';
import Stats from './components/Stats';
import Why from './components/Why';
import EmpleoVideo from './components/EmpleoVideo';
import MercadoAlumni from './components/MercadoAlumni';
import Testimonios from './components/Testimonios';
import Signup from './components/Signup';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

export default function App() {
  useScrollReveal();

  return (
    <FormModalProvider>
      <Header />
      <div className="sticky-form-scope">
        <RailForm />
        <Hero />
        <Docentes />
        <Stats />
        <Why />
        <EmpleoVideo />
        <MercadoAlumni />
      </div>
      <Testimonios />
      <Signup />
      <Footer />
      <FormModal />
    </FormModalProvider>
  );
}