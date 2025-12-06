import React, { useState, useRef, useEffect } from 'react';
import './../style/global.css';
import { FaPalette, FaEyeDropper, FaSave } from 'react-icons/fa';

const tipos = [
  "Metais-de-transição",
  "Metais-alcalinos",
  "Metais-alcalinos-terrosos",
  "Não-metais",
  "Lantanideos",
  "Actinideos",
  "Halogênios",
  "Semi-metais",
  "Gases-nobre",
  "Outros-metais"
];

function ConfigColors() {
  const [tipo, setTipo] = useState("Metais-de-transição");
  const [corBg, setCorBg] = useState("#8b0000");
  const [corTxt, setCorTxt] = useState("#fff");
  const [position, setPosition] = useState({ x: 650, y: 600 });
  const [isFollowing, setIsFollowing] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  function handleToggleFollow(e) {
    const tag = e.target.tagName.toLowerCase();
    if (
      tag === "button" ||
      tag === "input" ||
      tag === "select" ||
      tag === "option" ||
      tag === "svg" ||
      e.target.closest("button") ||
      e.target.closest("select") ||
      e.target.closest("input")
    ) return;

    if (!isFollowing) {
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y
      };
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }

  useEffect(() => {
    function handleMouseMove(e) {
      if (isFollowing) {
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y
        });
      }
    }

    function handleMouseUp() {
      if (isFollowing) setIsFollowing(false);
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isFollowing]);

  function handleSubmit(e) {
    e.preventDefault();
    document.documentElement.style.setProperty(`--cor-${tipo}-bg`, corBg);
    document.documentElement.style.setProperty(`--cor-${tipo}-txt`, corTxt);
  }

  return (
    <div
      onMouseDown={handleToggleFollow}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isFollowing ? 'grabbing' : 'grab',
        zIndex: 9999
      }}
    >
      <form onSubmit={handleSubmit} className='config-colors'>
        <label htmlFor="grupo" style={{ color: "#fff", fontWeight: "bold" }}>
          <FaPalette style={{ marginRight: '6px' }} />
          Grupo
        </label>

        <select id="grupo" value={tipo} onChange={e => setTipo(e.target.value)}>
          {tipos.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <label style={{ color: "#fff", fontWeight: "bold" }}>
          <FaEyeDropper style={{ marginRight: '6px' }} />
          Cor de fundo
        </label>
        <input type="color" value={corBg} onChange={e => setCorBg(e.target.value)} />

        <label style={{ color: "#fff", fontWeight: "bold" }}>
          <FaEyeDropper style={{ marginRight: '6px' }} />
          Cor do texto
        </label>
        <input type="color" value={corTxt} onChange={e => setCorTxt(e.target.value)} />

        <button type="submit">
          <FaSave style={{ marginRight: '6px' }} />
          Mudar cor
        </button>
      </form>
    </div>
  );
}

export default ConfigColors;
