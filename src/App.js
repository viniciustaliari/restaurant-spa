import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { NavBar } from "./Components/NavBar";
import { HomePage } from "./Components/HomePage";
import { Reservar } from "./Components/Reservar";
import { AppProvider } from "./appContext";
import { ResumenReserva } from "./Components/ResumenReserva";
import { CartaMenu } from "./Components/CartaMenu";
import { CartaDetallada } from "./Components/CartaDetallada";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <AppProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="reservar" element={<Reservar />} />
            <Route path="reservar/resumen" element={<ResumenReserva />} />
            <Route path="carta" element={<CartaMenu />} />
            <Route path="carta/nuestraCarta" element={<CartaDetallada />} />
            <Route path='*' element={<p>Not found</p>}/>
          </Routes>
        </AppProvider>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
