import React, { useState, useEffect } from "react";
import './../../style/elementPage.css';
import { useParams } from "react-router-dom"; 
const Elementos = () => {
  const { numero } = useParams(); 
  const [elementoInfo, setElementoInfo] = useState({});

  useEffect(() => {
    fetch(`https://tabela-api.onrender.com/api_infos.php?numero=${numero}`)
      .then(res => res.json())
      .then(data => setElementoInfo(data))
      .catch(err => console.error('Erro:', err));
  }, [numero]);

  return (
    <>
    <main className="content"> 
      <div className="element-header">
        <div className="symbol">{elementoInfo.simbolo ?? 'N/D'}</div>
        <div className="name">
          {elementoInfo.nome ?? 'N/D'} (Número atômico {elementoInfo.numero ?? 'N/D'})
        </div>
      </div>

      <section className="section-block">
        <h2>Descrição Geral</h2>
        <p>{elementoInfo.descr ?? 'N/D'}</p>
      </section>

      <section className="section-block">
        <h2>Identificação</h2>
        <div className="info-linha"><p>Símbolo:</p><p>{elementoInfo.simbolo ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Número atômico:</p><p>{elementoInfo.numero ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Grupo:</p><p>{elementoInfo.grupo ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Período:</p><p>{elementoInfo.periodo ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Bloco:</p><p>{elementoInfo.bloco ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Classificação:</p><p>{elementoInfo.classificacao ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Aparência:</p><p>{elementoInfo.aparencia ?? 'N/D'}</p></div>
      </section>

      <section className="section-block">
        <h2>Propriedades Físicas</h2>
        <div className="info-linha"><p>Fase em STP:</p><p>{elementoInfo.fase ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Densidade:</p><p>{elementoInfo.densidade ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Massa atômica:</p><p>{elementoInfo.massa_atomica ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Ponto de Fusão:</p><p>{elementoInfo.ponto_fusao ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Ponto de Ebulição:</p><p>{elementoInfo.ponto_ebulicao ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Entalpia de Vaporização:</p><p>{elementoInfo.entalpia_vap ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Calor Específico:</p><p>{elementoInfo.calor_especifico ?? 'N/D'}</p></div>
      </section>

      <section className="section-block">
        <h2>Propriedades Atômicas</h2>
        <div className="info-linha"><p>Configuração eletrônica:</p><p>{elementoInfo.config_eletronica ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Eletronegatividade:</p><p>{elementoInfo.eletronegatividade ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Afinidade eletrônica:</p><p>{elementoInfo.afinidade_eletronica ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Energia de ionização:</p><p>{elementoInfo.energia_ionizacao ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Estados de oxidação:</p><p>{elementoInfo.estado_oxidacao ?? 'N/D'}</p></div>
      </section>

      <section className="section-block">
        <h2>Composição Atômica</h2>
        <div className="info-linha"><p>Prótons:</p><p>{elementoInfo.protons ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Neutrons:</p><p>{elementoInfo.neutrons ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Elétrons:</p><p>{elementoInfo.eletrons ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Diagrama de Bohr:</p><p>{elementoInfo.bohr ?? 'N/D'}</p></div>
      </section>

      <section className="section-block">
        <h2>História e Nome</h2>
        <div className="info-linha2"> <p>{elementoInfo.historia ?? 'N/D'}</p> </div>
        <div className="info-linha"><p>Descobridor:</p><p>{elementoInfo.descobridor ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Nomeado por:</p><p>{elementoInfo.nomeado_por ?? 'N/D'}</p></div>
        <div className="info-linha"><p>Ano da descoberta:</p><p>{elementoInfo.ano_descoberta ?? 'N/D'}</p></div>
        <div className="info-linha">
          <p>Wikipédia:</p>
          <p><a href={elementoInfo.wikipedia} target="_blank" rel="noreferrer">Link</a></p>
        </div>
      </section>
    </main>
    </>
  );
};

export default Elementos;
