import React, { useState} from 'react';
import './../../style/global.css';


const Mecanica = () => {
  const [elementoInfo, setElementoInfo] = useState(null);

  const buscarInfoElemento = (numero) => {
    fetch(`https://tabela-api.onrender.com/api_elementos.php?numero=${numero}`)
    .then(res => res.json())
    .then(data => setElementoInfo(data))
    .catch(err => console.error('Erro:', err));
};
  return (
    <>
{elementoInfo && (
  <div className="info-elemento">
    <div className="info-coluna">
          <h2>{elementoInfo.nome} ({elementoInfo.simbolo})</h2>
    </div>
    <div className="info-coluna">
      <p><strong>Dureza Brinell:</strong> {elementoInfo.dureza_brinell ?? 'N/D'}</p>
    </div>
    <div className="info-coluna">
      <p><strong>Dureza Mohs:</strong> {elementoInfo.dureza_mohs ?? 'N/D'}</p>
    </div>
    <div className="info-coluna">
      <p><strong>Dureza Vickers:</strong> {elementoInfo.dureza_vickers ?? 'N/D'}</p>
    </div>
    <div className="info-coluna">
      <p><strong>Dureza Rockwell:</strong> {elementoInfo.dureza_rockwell ?? 'N/D'}</p>
    </div>
    <div className="info-coluna">
      <p><strong>Módulo de Bulk:</strong> {elementoInfo.modulo_bulk ?? 'N/D'}</p>
    </div>
    <div className="info-coluna">
      <p><strong>Módulo de Young:</strong> {elementoInfo.modulo_young ?? 'N/D'}</p>
    </div>
    <div className="info-coluna">
      <p><strong>Módulo de cisalhamento:</strong> {elementoInfo.modulo_cisalhamento ?? 'N/D'}</p>
    </div>
    <div className="info-coluna">
      <p><strong>Ponto de transição:</strong> {elementoInfo.ponto_transicao ?? 'N/D'}</p>
    </div>
  </div>
)}
      <div className="search-results"></div>


        <div>
          <table className="tabela">
            <thead>
              <tr>
                <th className="Nada"> </th>
                {/* Cabeçalho dos grupos (1 a 18) */}
                {[...Array(18)].map((_, i) => (
                  <th key={i} className="Nada">{i + 1}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="Nada">1</th>
                <td className="Não-metais" onClick={() => buscarInfoElemento('1')} >
                  H <sup>1</sup> <br />
                  <p>Hidrogênio</p>
                </td>
                <td colSpan="16" className="Nada"></td>
                <td className="Gases-nobre" onClick={() => buscarInfoElemento('2')} >
                  He <sup>2</sup> <br />
                  <p>Hélio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">2</th>
                <td className="Metais-alcalinos" onClick={() => buscarInfoElemento('3')} >
                  Li<sup>3</sup> <br />
                  <p>Lítio</p>
                </td>
                <td className="Metais-alcalinos-terrosos"  onClick={() => buscarInfoElemento('4')}>
                  Be<sup>4</sup> <br />
                  <p>Berílio</p>
                </td>
                <td colSpan="10" className="Nada"></td>
                <td className="Semi-metais"  onClick={() => buscarInfoElemento('5')}>
                  B<sup>5</sup> <br />
                  <p>Boro</p>
                </td>
                <td className="Não-metais"  onClick={() => buscarInfoElemento('6')}>
                  C<sup>6</sup> <br />
                  <p>Carbono</p>
                </td>
                <td className="Não-metais"  onClick={() => buscarInfoElemento('7')}>
                  N<sup>7</sup> <br />
                  <p>Nitrogênio</p>
                </td>
                <td className="Não-metais"  onClick={() => buscarInfoElemento('8')}>
                  O<sup>8</sup> <br />
                  <p>Oxigênio</p>
                </td>
                <td className="Halogênios"  onClick={() => buscarInfoElemento('9')}>
                  F<sup>9</sup> <br />
                  <p>Flúor</p>
                </td>
                <td className="Gases-nobre"  onClick={() => buscarInfoElemento('10')}>
                  Ne<sup>10</sup> <br />
                  <p>Neônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">3</th>
                <td className="Metais-alcalinos"  onClick={() => buscarInfoElemento('11')}>
                  Na<sup>11</sup> <br />
                  <p>Sódio</p>
                </td>
                <td className="Metais-alcalinos-terrosos"  onClick={() => buscarInfoElemento('12')}>
                  Mg<sup>12</sup> <br />
                  <p>Magnésio</p>
                </td>
                <td colSpan="10" className="Nada"></td > 
                <td className="Outros-metais"  onClick={() => buscarInfoElemento('13')}>
                  Al<sup>13</sup> <br />
                  <p>Alumínio</p>
                </td>
                <td className="Semi-metais"  onClick={() => buscarInfoElemento('14')}>
                  Si<sup>14</sup> <br />
                  <p>Silício</p>
                </td>
                <td className="Não-metais"  onClick={() => buscarInfoElemento('15')}> 
                  P<sup>15</sup> <br />
                  <p>Fósforo</p>
                </td>
                <td className="Não-metais"  onClick={() => buscarInfoElemento('16')}>
                  S<sup>16</sup> <br />
                  <p>Enxofre</p>
                </td>
                <td className="Halogênios"  onClick={() => buscarInfoElemento('17')}>
                  Cl<sup>17</sup> <br />
                  <p>Cloro</p>
                </td>
                <td className="Gases-nobre"  onClick={() => buscarInfoElemento('18')}>
                  Ar<sup>18</sup> <br />
                  <p>Argônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">4</th>
                <td className="Metais-alcalinos"  onClick={() => buscarInfoElemento('19')}>
                  K<sup>19</sup> <br />
                  <p>Potássio</p>
                </td>
                <td className="Metais-alcalinos-terrosos"  onClick={() => buscarInfoElemento('20')}>
                  Ca<sup>20</sup> <br />
                  <p>Cálcio</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('21')}>
                  Sc<sup>21</sup> <br />
                  <p>Escândio</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('22')}>
                  Ti<sup>22</sup> <br />
                  <p>Titânio</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('23')}>
                  V<sup>23</sup> <br />
                  <p>Vanádio</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('24')}>
                  Cr<sup>24</sup> <br />
                  <p>Cromo</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('25')}>
                  Mn<sup>25</sup> <br />
                  <p>Manganês</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('26')}>
                  Fe<sup>26</sup> <br />
                  <p>Ferro</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('27')}>
                  Co<sup>27</sup> <br />
                  <p>Cobalto</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('28')}>
                  Ni<sup>28</sup> <br />
                  <p>Níquel</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('29')}>
                  Cu<sup>29</sup> <br />
                  <p>Cobre</p>
                </td>
                <td className="Metais-de-transição"  onClick={() => buscarInfoElemento('30')}>
                  Zn<sup>30</sup> <br />
                  <p>Zinco</p>
                </td>
                <td className="Outros-metais"  onClick={() => buscarInfoElemento('31')}>
                  Ga<sup>31</sup> <br />
                  <p>Gálio</p>
                </td>
                <td className="Semi-metais"  onClick={() => buscarInfoElemento('32')}>
                  Ge<sup>32</sup> <br />
                  <p>Germânio</p>
                </td>
                <td className="Semi-metais"  onClick={() => buscarInfoElemento('33')}>
                  As<sup>33</sup><br />
                  <p>Arsênio</p>
                </td>
                <td className="Não-metais"  onClick={() => buscarInfoElemento('34')}>
                  Se<sup>34</sup><br />
                  <p>Selênio</p>
                </td>
                <td className="Halogênios"  onClick={() => buscarInfoElemento('35')}>
                  Br<sup>35</sup><br />
                  <p>Bromo</p>
                </td>
                <td className="Gases-nobre"  onClick={() => buscarInfoElemento('36')}>
                  Kr<sup>36</sup> <br />
                  <p>Criptônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">5</th>
                <td className="Metais-alcalinos" onClick={() => buscarInfoElemento('37')}>
                  Rb<sup>37</sup> <br />
                  <p>Rubídio</p>
                </td>
                <td className="Metais-alcalinos-terrosos" onClick={() => buscarInfoElemento('38')}>
                  Sr<sup>38</sup> <br />
                  <p>Estrôncio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('39')}>
                  Y<sup>39</sup> <br />
                  <p>Ítrio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('40')}>
                  Zr<sup>40</sup> <br />
                  <p>Zircônio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('41')}>
                  Nb<sup>41</sup> <br />
                  <p>Nióbio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('42')}>
                  Mo<sup>42</sup> <br />
                  <p>Molibdênio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('43')}>
                  Tc<sup>43</sup><br />
                  <p>Tecnécio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('44')}>
                  Ru<sup>44</sup><br />
                  <p>Rutênio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('45')}>
                  Rh<sup>45</sup><br />
                  <p>Ródio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('46')}>
                  Pd<sup>46</sup><br />
                  <p>Paládio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('47')}>
                  Ag<sup>47</sup><br />
                  <p>Prata</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('48')}>
                  Cd<sup>48</sup><br />
                  <p>Cádmio</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('49')}>
                  In<sup>49</sup><br />
                  <p>Índio</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('50')}>
                  Sn<sup>50</sup><br />
                  <p>Estanho</p>
                </td>
                <td className="Semi-metais" onClick={() => buscarInfoElemento('51')}>
                  Sb<sup>51</sup><br />
                  <p>Antimônio</p>
                </td>
                <td className="Semi-metais" onClick={() => buscarInfoElemento('52')}>
                  Te<sup>52</sup><br />
                  <p>Telúrio</p>
                </td>
                <td className="Halogênios" onClick={() => buscarInfoElemento('53')}>
                  I<sup>53</sup><br />
                  <p>Iodo</p>
                </td>
                <td className="Gases-nobre" onClick={() => buscarInfoElemento('54')}>
                  Xe<sup>54</sup><br />
                  <p>Xenônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">6</th>
                <td className="Metais-alcalinos" onClick={() => buscarInfoElemento('55')}>
                  Cs<sup>55</sup><br />
                  <p>Césio</p>
                </td>
                <td className="Metais-alcalinos-terrosos" onClick={() => buscarInfoElemento('56')}>
                  Ba<sup>56</sup><br />
                  <p>Bário</p>
                </td>
                <td colSpan="1" className="Nada"></td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('72')}>
                  Hf<sup>72</sup><br />
                  <p>Háfnio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('73')}>
                  Ta<sup>73</sup><br />
                  <p>Tântalo</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('74')}>
                  W<sup>74</sup><br />
                  <p>Tungstênio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('75')}>
                  Re<sup>75</sup><br />
                  <p>Rênio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('76')}>
                  Os<sup>76</sup><br />
                  <p>Ósmio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('77')}>
                  Ir<sup>77</sup><br />
                  <p>Irídio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('78')}>
                  Pt<sup>78</sup><br />
                  <p>Platina</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('79')}>
                  Au<sup>79</sup><br />
                  <p>Ouro</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('80')}>
                  Hg<sup>80</sup><br />
                  <p>Mercúrio</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('81')}>
                  Tl<sup>81</sup><br />
                  <p>Tálio</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('82')}>
                  Pb<sup>82</sup><br />
                  <p>Chumbo</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('83')}>
                  Bi<sup>83</sup><br />
                  <p>Bismuto</p>
                </td>
                <td className="Semi-metais" onClick={() => buscarInfoElemento('84')}>
                  Po<sup>84</sup><br />
                  <p>Polônio</p>
                </td>
                <td className="Halogênios" onClick={() => buscarInfoElemento('85')}>
                  At<sup>85</sup><br />
                  <p>Astato</p>
                </td>
                <td className="Gases-nobre" onClick={() => buscarInfoElemento('86')}>
                  Rn<sup>86</sup><br />
                  <p>Radônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">7</th>
                <td className="Metais-alcalinos" onClick={() => buscarInfoElemento('87')}>
                  Fr<sup>87</sup><br />
                  <p>Frâncio</p>
                </td>
                <td className="Metais-alcalinos-terrosos" onClick={() => buscarInfoElemento('88')}>
                  Ra<sup>88</sup><br />
                  <p>Rádio</p>
                </td>
                <td colSpan="1" className="Nada"></td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('104')}>
                  Rf<sup>104</sup><br />
                  <p>Rutherfórdio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('105')}>
                  Db<sup>105</sup><br />
                  <p>Dúbnio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('106')}>
                  Sg<sup>106</sup><br />
                  <p>Seabórgio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('107')}>
                  Bh<sup>107</sup><br />
                  <p>Bóhrio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('108')}>
                  Hs<sup>108</sup><br />
                  <p>Hássio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('109')}>
                  Mt<sup>109</sup><br />
                  <p>Meitnério</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('110')}>
                  Ds<sup>110</sup><br />
                  <p>Darmstádio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('111')}>
                  Rg<sup>111</sup><br />
                  <p>Roentgênio</p>
                </td>
                <td className="Metais-de-transição" onClick={() => buscarInfoElemento('112')}>
                  Cn<sup>112</sup><br />
                  <p>Copernício</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('113')}>
                  Nh<sup>113</sup><br />
                  <p>Nihônio</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('114')}>
                  Fl<sup>114</sup><br />
                  <p>Fleróvio</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('115')}>
                  Mc<sup>115</sup><br />
                  <p>Moscóvio</p>
                </td>
                <td className="Outros-metais" onClick={() => buscarInfoElemento('116')}>
                  Lv<sup>116</sup><br />
                  <p>Livermório</p>
                </td>
                <td className="Halogênios" onClick={() => buscarInfoElemento('117')}>
                  Ts<sup>117</sup><br />
                  <p>Tenessino</p>
                </td>
                <td className="Gases-nobre" onClick={() => buscarInfoElemento('118')}>
                  Og<sup>118</sup><br />
                  <p>Oganessônio</p>
                </td>
              </tr>
              <tr>
                 <th className="Nada"></th>
              </tr>
              <tr>
              <th className="Nada"></th>
               <td colSpan="2" className="Nada"></td>
              <th className="Nada">6</th>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('57')}>
                La<sup>57</sup><br />
                <p>Lantânio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('58')}>
                Ce<sup>58</sup><br />
                <p>Cério</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('59')}>
                Pr<sup>59</sup><br />
                <p>Praseodímio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('60')}>
                Nd<sup>60</sup><br />
                <p>Neodímio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('61')}>
                Pm<sup>61</sup><br />
                <p>Promécio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('62')}>
                Sm<sup>62</sup><br />
                <p>Samário</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('63')}>
                Eu<sup>63</sup><br />
                <p>Európio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('64')}>
                Gd<sup>64</sup><br />
                <p>Gadolínio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('65')}>
                Tb<sup>65</sup><br />
                <p>Térbio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('66')}>
                Dy<sup>66</sup><br />
                <p>Disprósio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('67')}>
                Ho<sup>67</sup><br />
                <p>Hólmio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('68')}>
                Er<sup>68</sup><br />
                <p>Érbio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('69')}>
                Tm<sup>69</sup><br />
                <p>Túlio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('70')}>
                Yb<sup>70</sup><br />
                <p>Itérbio</p>
              </td>
              <td className="Lantanideos" onClick={() => buscarInfoElemento('71')}>
                Lu<sup>71</sup><br />
                <p>Lutécio</p>
              </td>
            </tr>
            <tr>
            <th className="Nada"></th>
            <td colSpan="2" className="Nada"></td>
            <th className="Nada">7</th>
            <td className="Actinideos" onClick={() => buscarInfoElemento('89')}>
              Ac<sup>89</sup><br />
              <p>Actínio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('90')}>
              Th<sup>90</sup><br />
              <p>Tório</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('91')}>
              Pa<sup>91</sup><br />
              <p>Protactínio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('92')}>
              U<sup>92</sup><br />
              <p>Urânio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('93')}>
              Np<sup>93</sup><br />
              <p>Neptúnio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('94')}>
              Pu<sup>94</sup><br />
              <p>Plutônio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('95')}>
              Am<sup>95</sup><br />
              <p>Amerício</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('96')}>
              Cm<sup>96</sup><br />
              <p>Cúrio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('97')}>
              Bk<sup>97</sup><br />
              <p>Berquélio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('98')}>
              Cf<sup>98</sup><br />
              <p>Califórnio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('99')}>
              Es<sup>99</sup><br />
              <p>Einstênio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('100')}>
              Fm<sup>100</sup><br />
              <p>Férmio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('101')}>
              Md<sup>101</sup><br />
              <p>Mendelévio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('102')}>
              No<sup>102</sup><br />
              <p>Nobélio</p>
            </td>
            <td className="Actinideos" onClick={() => buscarInfoElemento('103')}>
              Lr<sup>103</sup><br />
              <p>Laurêncio</p>
            </td>
          </tr>
          <tr>            
              <th className="Nada"></th>
          </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default Mecanica;