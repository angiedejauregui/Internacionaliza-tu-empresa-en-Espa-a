import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import PorQueEspaña from "./components/PorQueEspaña";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import economia from "./assets/img/economia.gif";
import impuestos from "./assets/img/impuestos.gif";
import talento from "./assets/img/talento.gif";
import infraestructura from "./assets/img/infraestructura.gif";
import calidadDeVida from "./assets/img/calidadDeVida.gif";
import QuienesSomos from "./components/QuienesSomos";
import SolucionIntegral from "./components/SolucionIntegral";
import ComoTrabajamos from "./components/ComoTrabajamos";
import Servicios from "./components/Servicios";
import Contactanos from "./components/Contactanos";
import WhatsApp from "./components/WhatsApp";
import Notas from "./components/Notas";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";


function App() {

  return (
    <>
      <Navbar />
      <Inicio />
      <PorQueEspaña
        economia={economia}
        impuestos={impuestos}
        talento={talento}
        infraestructura={infraestructura}
        calidadDeVida={calidadDeVida}
      />
      <QuienesSomos />
      <SolucionIntegral />
      <ComoTrabajamos />
      <Servicios />
      <Notas />
      <Contactanos />
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
