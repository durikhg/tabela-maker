import React, { useState, useRef, useEffect } from 'react';
import './../style/global.css';

import {
  FaEye,
  FaAdjust,
  FaSearchPlus,
  FaSearchMinus
} from 'react-icons/fa';

function Acessibilidade() {
  const [opcaoAtiva, setOpcaoAtiva] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

  const [position, setPosition] = useState({ x: 160, y: 60 });
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const [leitorAtivo, setLeitorAtivo] = useState(false);
  const [altoContraste, setAltoContraste] = useState(false);

  // ---------------- ARRASTAR ----------------
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging.current) {
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        });
      }
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [position]);

  const handleMouseDown = (e) => {
    if (e.target.classList.contains('acess-heading')) {
      isDragging.current = true;
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  // ---------------- FONTES ----------------
const aumentarFonte = () => {
  // aumenta o tamanho base do HTML
  document.documentElement.style.fontSize =
    parseInt(getComputedStyle(document.documentElement).fontSize) + 2 + "px";

  // força elementos a herdarem o novo tamanho
  aplicarFonte();
};

const diminuirFonte = () => {
  document.documentElement.style.fontSize =
    parseInt(getComputedStyle(document.documentElement).fontSize) - 2 + "px";

  aplicarFonte();
};

// garante que td, p, span, div, th etc herdem o font-size atual
const aplicarFonte = () => {
  const elementos = document.querySelectorAll(
    "p, td, th, span, div, li, a, button, input, h1, h2, h3, h4, h5, h6"
  );

  elementos.forEach((el) => {
    el.style.fontSize = "inherit";
  });
};


  // ---------------- LEITOR DE TELA ----------------
  useEffect(() => {
    if (!leitorAtivo) return;

    const speak = (txt) => {
      const u = new SpeechSynthesisUtterance(txt);
      u.lang = "pt-BR";
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    };

    const handler = (e) => {
      const texto = e.target.innerText || e.target.alt || "";
      if (texto.trim() !== "") speak(texto);
    };

    document.addEventListener("click", handler);

    return () => document.removeEventListener("click", handler);
  }, [leitorAtivo]);


  // ---------------- ALTO CONTRASTE ----------------
  useEffect(() => {
    document.body.classList.toggle("alto-contraste", altoContraste);
  }, [altoContraste]);

  // ---------------- RENDER ----------------
  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: 'default',
        zIndex: 9999,
        display: 'flex',
      }}
    >
      <div className={`acess-menu ${showButtons ? 'expandido' : ''}`}>
        <a
          className='acess-heading'
          onClick={() => setShowButtons(p => !p)}
          style={{ cursor: 'move' }}
        >
          Acessibilidade
        </a>

        {showButtons && (
          <div className="acess-options-container">

            <a
              className={`acess-option ${opcaoAtiva === "mais" ? "active" : ""}`}
              onClick={() => { aumentarFonte(); setOpcaoAtiva("mais"); }}
            >
              <FaSearchPlus /> Aumentar fonte
            </a>

            <a
              className={`acess-option ${opcaoAtiva === "menos" ? "active" : ""}`}
              onClick={() => { diminuirFonte(); setOpcaoAtiva("menos"); }}
            >
              <FaSearchMinus /> Diminuir fonte
            </a>

            <a
              className={`acess-option ${opcaoAtiva === 'leitor' ? 'active' : ''}`}
              onClick={() => {
                setOpcaoAtiva('leitor');
                setLeitorAtivo(v => !v);
              }}
            >
              <FaEye /> {leitorAtivo ? "Desativar leitor" : "Ativar leitor"}
            </a>

            <a
              className={`acess-option ${opcaoAtiva === 'contraste' ? 'active' : ''}`}
              onClick={() => {
                setOpcaoAtiva('contraste');
                setAltoContraste(v => !v);
              }}
            >
              <FaAdjust /> {altoContraste ? "Desativar contraste" : "Ativar contraste"}
            </a>

          </div>
        )}
      </div>

      <div className="acess-conteudo" style={{ padding: '20px', flex: 1 }}>
        {/* Vazio — este menu só tem botões */}
      </div>
    </div>
  );
}

export default Acessibilidade;
