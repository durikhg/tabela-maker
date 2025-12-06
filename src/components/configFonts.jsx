import React, { useState, useRef, useEffect } from 'react';
import './../style/global.css';
import { FaFont, FaSave, FaUndo } from 'react-icons/fa';

const fontes = [
  "Arial",
  "Georgia",
  "Courier New",
  "Tahoma",
  "Verdana",
  "Times New Roman",
  "Comic Sans MS",
  "Lucida Console",
  "Trebuchet MS",
  "Impact"
];

function ConfigFonts() {
  const [fonteClasse, setFonteClasse] = useState("Arial");
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

  function aplicarFonte(e) {
    e.preventDefault();
    document.querySelectorAll('p').forEach(p => {
      p.style.fontFamily = `'${fonteClasse}', sans-serif`;
    });
  }

  function restaurarFonte(e) {
    e.preventDefault();
    document.querySelectorAll('p').forEach(p => {
      p.style.fontFamily = 'sans-serif';
    });
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
      <form className='config-fonts'>
        <label htmlFor="fonte" style={{ color: "#fff", fontWeight: "bold" }}>
          <FaFont style={{ marginRight: '6px' }} />
          Fonte
        </label>

        <select id="fonte" value={fonteClasse} onChange={e => setFonteClasse(e.target.value)}>
          {fontes.map(f => <option key={f} value={f}>{f}</option>)}
        </select>

        <button onClick={aplicarFonte}>
          <FaSave style={{ marginRight: '6px' }} />
          Mudar Fonte
        </button>

        <button onClick={restaurarFonte}>
          <FaUndo style={{ marginRight: '6px' }} />
          Restaurar Fonte
        </button>
      </form>
    </div>
  );
}

export default ConfigFonts;
