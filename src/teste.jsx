import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // se quiser aplicar estilos globais
import Quimica from './pages/Quimica';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Quimica/>
  </React.StrictMode>
);
