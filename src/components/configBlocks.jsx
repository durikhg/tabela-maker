import React, { useState, useRef, useEffect } from 'react';
import './../style/global.css';
import { FaTrash, FaHighlighter, FaUndo, FaListAlt } from 'react-icons/fa';

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

function ConfigBlocks() {
  const [tipo, setTipo] = useState("Metais-de-transição");
  const [position, setPosition] = useState({ x: 650, y: 600 });
  const [isFollowing, setIsFollowing] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  function handleToggleFollow(e) {

    // impede arrastar se clicar em botões, select, inputs, labels etc.
    const tag = e.target.tagName.toLowerCase();
    const blockClick =
      tag === "button" ||
      tag === "select" ||
      tag === "option" ||
      tag === "label" ||
      tag === "svg" ||
      e.target.closest("button") ||
      e.target.closest("select");

    if (blockClick) return;

    // inicia arrastar
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isFollowing]);

  function destacarGrupo() {
    document.querySelectorAll('.grupo-texto').forEach(txt => {
      txt.classList.add("hide");
    });

    document.querySelectorAll(`.grupo-texto.${tipo}`).forEach(txt => {
      txt.classList.remove("hide");
    });

    document.querySelectorAll('td').forEach(td => {
      td.style.border = 'none';
      td.style.boxShadow = 'none';
    });

    tipos.forEach(t => {
      document.documentElement.style.setProperty(`--cor-${t}-bg`, "transparent");
      document.documentElement.style.setProperty(`--cor-${t}-txt`, "transparent");
    });

    document.documentElement.style.setProperty(`--cor-${tipo}-bg`, "");
    document.documentElement.style.setProperty(`--cor-${tipo}-txt`, "");

    document.querySelectorAll(`td.${tipo}`).forEach(td => {
      td.style.border = '1px solid black';
    });
  }

  function restaurarGrupo() {

    document.querySelectorAll('.grupo-texto').forEach(txt => {
      txt.classList.remove("hide");
    });

    tipos.forEach(t => {
      document.documentElement.style.setProperty(`--cor-${t}-bg`, "");
      document.documentElement.style.setProperty(`--cor-${t}-txt`, "");
    });

    document.querySelectorAll('td').forEach(td => {
      td.style.border = '1px solid black';
      td.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0.2) inset';
      td.classList.remove("nada");
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    document.querySelectorAll(`td.${tipo}`).forEach(td => {
      td.style.border = 'none';
      td.classList.add("nada");
    });

    document.querySelectorAll(`.grupo-texto.${tipo}`).forEach(txt => {
      txt.classList.add("hide");
    });

    document.documentElement.style.setProperty(`--cor-${tipo}-bg`, "transparent");
    document.documentElement.style.setProperty(`--cor-${tipo}-txt`, "transparent");
  }

  return (
    <div
      onClick={handleToggleFollow}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: isFollowing ? 'grabbing' : 'grab',
        zIndex: 9999
      }}
    >
      <form onSubmit={handleSubmit} className='config-blocks'>
        
        <label htmlFor="grupo" style={{ color: "#fff", fontWeight: "bold" }}>
          <FaListAlt style={{ marginRight: '6px' }} />
          Grupo
        </label>

        <select id="grupo" value={tipo} onChange={e => setTipo(e.target.value)}>
          {tipos.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <button type="submit">
          <FaTrash style={{ marginRight: '6px' }} />
          Remover bloco
        </button>

        <button type="button" onClick={destacarGrupo}>
          <FaHighlighter style={{ marginRight: '6px' }} />
          Destacar bloco
        </button>

        <button type="button" onClick={restaurarGrupo}>
          <FaUndo style={{ marginRight: '6px' }} />
          Restaurar bloco
        </button>
      
      </form>
    </div>
  );
}

export default ConfigBlocks;
