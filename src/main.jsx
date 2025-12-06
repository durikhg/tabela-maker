import { StrictMode, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar.jsx';
import Tabela from './pages/Tabela';
import Temperatura from './pages/Temperatura';
import Quimica from './pages/Quimica';
import Infos from './pages/Infos';
import Estrutura from './pages/Estrutura';
import Eletrons from './pages/Eletrons';
import Densidade from './pages/Densidade';
import Condutividade from './pages/Condutividade';
import Elementos from './pages/Elementos';
import Mecanica from './pages/Mecanica';
import ConfigMenu from './components/configs.jsx';
import AccessMenu from './components/acessibilidade.jsx';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


function ConfigMenuWrapper({ capturaRef }) {
  const location = useLocation();
  const rotasPermitidas = ["/", "/pages/Tabela"];
  const deveAparecer = rotasPermitidas.includes(location.pathname);
  return deveAparecer ? <ConfigMenu capturaRef={capturaRef} /> : null;
}

function AccessMenuWrapper() {
  const location = useLocation();
  const rotasPermitidas = ["/", "/pages/Tabela"];
  const deveAparecer = rotasPermitidas.includes(location.pathname);
  return deveAparecer ? <AccessMenu /> : null;
}

function Main() {
  const capturaRef = useRef(null);

  return (
    <BrowserRouter>
      <Navbar />

      <ConfigMenuWrapper capturaRef={capturaRef} />
      <AccessMenuWrapper />

      <Routes>
        <Route path="/" element={<Tabela ref={capturaRef} />} />
        <Route path="/pages/Tabela" element={<Tabela ref={capturaRef} />} />
        <Route path="/pages/Temperatura" element={<Temperatura />} />
        <Route path="/pages/Quimica" element={<Quimica />} />
        <Route path="/pages/Infos" element={<Infos />} />
        <Route path="/pages/Estrutura" element={<Estrutura />} />
        <Route path="/pages/Mecanica" element={<Mecanica />} />
        <Route path="/pages/Eletrons" element={<Eletrons />} />
        <Route path="/pages/Densidade" element={<Densidade />} />
        <Route path="/pages/Condutividade" element={<Condutividade />} />
        <Route path="/pages/Elementos/:numero" element={<Elementos />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
