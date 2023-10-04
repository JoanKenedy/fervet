import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Promociones from "./pages/Promociones";
import Servicios from "./pages/Servicios";
import Botones from "./components/Botones";
import Vacunacion from "./pages/Vacunacion";
import Cirugias from "./pages/Cirugias";
import Formulario from "./components/Formulario";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="promociones" element={<Promociones />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="vacunacion" element={<Vacunacion />} />
          <Route path="cirugia" element={<Cirugias />} />
          <Route path="formulario" element={<Formulario />} />
        </Routes>
        <Botones />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
