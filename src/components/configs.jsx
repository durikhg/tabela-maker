import React, { useState, useRef, useEffect } from 'react';
import './../style/global.css';
import html2canvas from 'html2canvas';
import ConfigColors from './configColors';
import ConfigBlocks from './configBlocks';
import ConfigFonts from './configFonts';
import { FaPalette, FaFont, FaRegSun, FaTrash, FaSave } from 'react-icons/fa';

function Config({ capturaRef }) {
  const [opcaoAtiva, setOpcaoAtiva] = useState(null);
  const [showButtons, setShowButtons] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 60 });
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

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
    if (e.target.classList.contains('heading-options')) {
      isDragging.current = true;
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  const handleSaveTable = () => {
    if (capturaRef && capturaRef.current) {
      html2canvas(capturaRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'captura.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

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
      <div className={`config-menu ${showButtons ? 'expandido' : ''}`}>
        <a
          className='heading-options'
          onClick={() => setShowButtons(prev => !prev)}
          style={{ cursor: 'move' }} 
        >
          Configurações
        </a>

        {showButtons && (
          <div className="config-options-container">
            <a
              className={`options ${opcaoAtiva === 'cores' ? 'active' : ''}`}
              onClick={() => setOpcaoAtiva('cores')}
            >
              <FaPalette /> Escolher cores
            </a>

            <a
              className={`options ${opcaoAtiva === 'fontes' ? 'active' : ''}`}
              onClick={() => setOpcaoAtiva('fontes')}
            >
              <FaFont /> Escolher fontes
            </a>

            <a
              className={`options ${opcaoAtiva === 'remover' ? 'active' : ''}`}
              onClick={() => setOpcaoAtiva('remover')}
            >
              <FaTrash /> Remover grupos
            </a>

            <a
              className={`options ${opcaoAtiva === 'salvar' ? 'active' : ''}`}
              onClick={() => { setOpcaoAtiva('salvar'); handleSaveTable(); }}
            >
              <FaSave /> Salvar tabela
            </a>
          </div>
        )}
      </div>

      <div className="config-conteudo" style={{ padding: '20px', flex: 1 }}>
        {opcaoAtiva === 'cores' && <ConfigColors />}
        {opcaoAtiva === 'fontes' && <ConfigFonts />}
        {opcaoAtiva === 'remover' && <ConfigBlocks />}
      </div>
    </div>
  );
}

export default Config;