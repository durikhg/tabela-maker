import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaAtom, FaTemperatureHigh, FaFlask, FaInfoCircle, FaCogs, FaBolt, FaBalanceScale, FaThermometerHalf } from 'react-icons/fa';
import './../style/global.css';

const elementos = [
  { id: 1, Name: "Hidrogênio", Simbolo: "H" },
  { id: 2, Name: "Hélio", Simbolo: "He" },
  { id: 3, Name: "Lítio", Simbolo: "Li" },
  { id: 4, Name: "Berílio", Simbolo: "Be" },
  { id: 5, Name: "Boro", Simbolo: "B" },
  { id: 6, Name: "Carbono", Simbolo: "C" },
  { id: 7, Name: "Nitrogênio", Simbolo: "N" },
  { id: 8, Name: "Oxigênio", Simbolo: "O" },
  { id: 9, Name: "Flúor", Simbolo: "F" },
  { id: 10, Name: "Neônio", Simbolo: "Ne" },
  { id: 11, Name: "Sódio", Simbolo: "Na" },
  { id: 12, Name: "Magnésio", Simbolo: "Mg" },
  { id: 13, Name: "Alumínio", Simbolo: "Al" },
  { id: 14, Name: "Silício", Simbolo: "Si" },
  { id: 15, Name: "Fósforo", Simbolo: "P" },
  { id: 16, Name: "Enxofre", Simbolo: "S" },
  { id: 17, Name: "Cloro", Simbolo: "Cl" },
  { id: 18, Name: "Argônio", Simbolo: "Ar" },
  { id: 19, Name: "Potássio", Simbolo: "K" },
  { id: 20, Name: "Cálcio", Simbolo: "Ca" },
  { id: 21, Name: "Escândio", Simbolo: "Sc" },
  { id: 22, Name: "Titânio", Simbolo: "Ti" },
  { id: 23, Name: "Vanádio", Simbolo: "V" },
  { id: 24, Name: "Cromo", Simbolo: "Cr" },
  { id: 25, Name: "Manganês", Simbolo: "Mn" },
  { id: 26, Name: "Ferro", Simbolo: "Fe" },
  { id: 27, Name: "Cobalto", Simbolo: "Co" },
  { id: 28, Name: "Níquel", Simbolo: "Ni" },
  { id: 29, Name: "Cobre", Simbolo: "Cu" },
  { id: 30, Name: "Zinco", Simbolo: "Zn" },
  { id: 31, Name: "Gálio", Simbolo: "Ga" },
  { id: 32, Name: "Germânio", Simbolo: "Ge" },
  { id: 33, Name: "Arsênio", Simbolo: "As" },
  { id: 34, Name: "Selênio", Simbolo: "Se" },
  { id: 35, Name: "Bromo", Simbolo: "Br" },
  { id: 36, Name: "Criptônio", Simbolo: "Kr" },
  { id: 37, Name: "Rubídio", Simbolo: "Rb" },
  { id: 38, Name: "Estrôncio", Simbolo: "Sr" },
  { id: 39, Name: "Ítrio", Simbolo: "Y" },
  { id: 40, Name: "Zircônio", Simbolo: "Zr" },
  { id: 41, Name: "Nióbio", Simbolo: "Nb" },
  { id: 42, Name: "Molibdênio", Simbolo: "Mo" },
  { id: 43, Name: "Tecnécio", Simbolo: "Tc" },
  { id: 44, Name: "Rutênio", Simbolo: "Ru" },
  { id: 45, Name: "Ródio", Simbolo: "Rh" },
  { id: 46, Name: "Paládio", Simbolo: "Pd" },
  { id: 47, Name: "Prata", Simbolo: "Ag" },
  { id: 48, Name: "Cádmio", Simbolo: "Cd" },
  { id: 49, Name: "Índio", Simbolo: "In" },
  { id: 50, Name: "Estanho", Simbolo: "Sn" },
  { id: 51, Name: "Antimônio", Simbolo: "Sb" },
  { id: 52, Name: "Telúrio", Simbolo: "Te" },
  { id: 53, Name: "Iodo", Simbolo: "I" },
  { id: 54, Name: "Xenônio", Simbolo: "Xe" },
  { id: 55, Name: "Césio", Simbolo: "Cs" },
  { id: 56, Name: "Bário", Simbolo: "Ba" },
  { id: 57, Name: "Lantânio", Simbolo: "La" },
  { id: 58, Name: "Cério", Simbolo: "Ce" },
  { id: 59, Name: "Praseodímio", Simbolo: "Pr" },
  { id: 60, Name: "Neodímio", Simbolo: "Nd" },
  { id: 61, Name: "Promécio", Simbolo: "Pm" },
  { id: 62, Name: "Samário", Simbolo: "Sm" },
  { id: 63, Name: "Európio", Simbolo: "Eu" },
  { id: 64, Name: "Gadolínio", Simbolo: "Gd" },
  { id: 65, Name: "Térbio", Simbolo: "Tb" },
  { id: 66, Name: "Disprósio", Simbolo: "Dy" },
  { id: 67, Name: "Hólmio", Simbolo: "Ho" },
  { id: 68, Name: "Érbio", Simbolo: "Er" },
  { id: 69, Name: "Túlio", Simbolo: "Tm" },
  { id: 70, Name: "Itérbio", Simbolo: "Yb" },
  { id: 71, Name: "Lutécio", Simbolo: "Lu" },
  { id: 72, Name: "Háfnio", Simbolo: "Hf" },
  { id: 73, Name: "Tântalo", Simbolo: "Ta" },
  { id: 74, Name: "Tungstênio", Simbolo: "W" },
  { id: 75, Name: "Rênio", Simbolo: "Re" },
  { id: 76, Name: "Ósmio", Simbolo: "Os" },
  { id: 77, Name: "Irídio", Simbolo: "Ir" },
  { id: 78, Name: "Platina", Simbolo: "Pt" },
  { id: 79, Name: "Ouro", Simbolo: "Au" },
  { id: 80, Name: "Mercúrio", Simbolo: "Hg" },
  { id: 81, Name: "Tálio", Simbolo: "Tl" },
  { id: 82, Name: "Chumbo", Simbolo: "Pb" },
  { id: 83, Name: "Bismuto", Simbolo: "Bi" },
  { id: 84, Name: "Polônio", Simbolo: "Po" },
  { id: 85, Name: "Astato", Simbolo: "At" },
  { id: 86, Name: "Radônio", Simbolo: "Rn" },
  { id: 87, Name: "Frâncio", Simbolo: "Fr" },
  { id: 88, Name: "Rádio", Simbolo: "Ra" },
  { id: 89, Name: "Actínio", Simbolo: "Ac" },
  { id: 90, Name: "Tório", Simbolo: "Th" },
  { id: 91, Name: "Protactínio", Simbolo: "Pa" },
  { id: 92, Name: "Urânio", Simbolo: "U" },
  { id: 93, Name: "Netúnio", Simbolo: "Np" },
  { id: 94, Name: "Plutônio", Simbolo: "Pu" },
  { id: 95, Name: "Amerício", Simbolo: "Am" },
  { id: 96, Name: "Cúrio", Simbolo: "Cm" },
  { id: 97, Name: "Bérquélio", Simbolo: "Bk" },
  { id: 98, Name: "Califórnio", Simbolo: "Cf" },
  { id: 99, Name: "Einstênio", Simbolo: "Es" },
  { id: 100, Name: "Férmio", Simbolo: "Fm" },
  { id: 101, Name: "Mendelévio", Simbolo: "Md" },
  { id: 102, Name: "Nobélio", Simbolo: "No" },
  { id: 103, Name: "Laurêncio", Simbolo: "Lr" },
  { id: 104, Name: "Rutherfórdio", Simbolo: "Rf" },
  { id: 105, Name: "Dúbnio", Simbolo: "Db" },
  { id: 106, Name: "Seabórgio", Simbolo: "Sg" },
  { id: 107, Name: "Bóhrio", Simbolo: "Bh" },
  { id: 108, Name: "Hássio", Simbolo: "Hs" },
  { id: 109, Name: "Meitnério", Simbolo: "Mt" },
  { id: 110, Name: "Darmstádio", Simbolo: "Ds" },
  { id: 111, Name: "Roentgênio", Simbolo: "Rg" },
  { id: 112, Name: "Copernício", Simbolo: "Cn" },
  { id: 113, Name: "Nihônio", Simbolo: "Nh" },
  { id: 114, Name: "Fleróvio", Simbolo: "Fl" },
  { id: 115, Name: "Moscóvio", Simbolo: "Mc" },
  { id: 116, Name: "Livermório", Simbolo: "Lv" },
  { id: 117, Name: "Tenessino", Simbolo: "Ts" },
  { id: 118, Name: "Oganessônio", Simbolo: "Og" },
];


const Navbar = () => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(elementos);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
    const filteredItems = elementos.filter((elemento) =>
      elemento.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <div className="navbar">
        <div className="links">
          <h1 className="heading"><FaAtom /> Tabela Maker</h1>
          <NavLink to="/pages/Tabela" className={({ isActive }) => isActive ? 'active' : ''}><FaAtom /> Tabela</NavLink>
          <NavLink to="/pages/Temperatura" className={({ isActive }) => isActive ? 'active' : ''}><FaTemperatureHigh /> Temperatura</NavLink>
          <NavLink to="/pages/Quimica" className={({ isActive }) => isActive ? 'active' : ''}><FaFlask /> Química</NavLink>
          <NavLink to="/pages/Infos" className={({ isActive }) => isActive ? 'active' : ''}><FaInfoCircle /> Infos</NavLink>
          <NavLink to="/pages/Estrutura" className={({ isActive }) => isActive ? 'active' : ''}><FaCogs /> Estrutura</NavLink>
          <NavLink to="/pages/Mecanica" className={({ isActive }) => isActive ? 'active' : ''}><FaBolt /> Mecânica</NavLink>
          <NavLink to="/pages/Eletrons" className={({ isActive }) => isActive ? 'active' : ''}><FaBolt /> Elétrons</NavLink>
          <NavLink to="/pages/Densidade" className={({ isActive }) => isActive ? 'active' : ''}><FaBalanceScale /> Densidade</NavLink>
          <NavLink to="/pages/Condutividade" className={({ isActive }) => isActive ? 'active' : ''}><FaThermometerHalf /> Condutividade</NavLink>
          <input
            className="search"
            type="text"
            placeholder="Pesquisar..."
            value={searchItem}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {searchItem.trim() !== '' && (
        <div className="search-results">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <Link key={user.id} to={`/pages/Elementos/${user.id}`} className="search-item">
                {user.Name}
              </Link>
            ))
          ) : (
            <div className="no-results">Nenhum elemento encontrado</div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
