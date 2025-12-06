import React, { forwardRef } from 'react';
import './../../style/global.css';


const Tabela = forwardRef((props, ref) => {

  return (
    <>
       
        <div>
          <table className="tabela" ref={ref}>
             <div className='grupos'>
  <div className='grupo-linha'>
    <div className="bolinha Não-metais"></div>
    <p className='grupo-texto Não-metais'>Não metais</p>
  </div>
  

  <div className='grupo-linha'>
    <div className="bolinha Metais-alcalinos"></div>
    <p className='grupo-texto Metais-alcalinos'>Metais alcalinos</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Metais-alcalinos-terrosos"></div>
    <p className='grupo-texto Metais-alcalinos-terrosos'>Metais alcalino terrosos</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Metais-de-transição"></div>
    <p className='grupo-texto Metais-de-transição'>Metais de transição</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Outros-metais"></div>
    <p className='grupo-texto Outros-metais'>Outros metais</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Semi-metais"></div>
    <p className='grupo-texto Semi-metais'>Semi metais</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Halogênios"></div>
    <p className='grupo-texto Halogênios'>Halogênios</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Gases-nobre"></div>
    <p className='grupo-texto Gases-nobre'>Gases nobres</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Lantanideos"></div>
    <p className='grupo-texto Lantanideos'>Lantanídeos</p>
  </div>

  <div className='grupo-linha'>
    <div className="bolinha Actinideos"></div>
    <p className='grupo-texto Actinideos'>Actinídeos</p>
  </div>
</div>
            <thead>
              <tr>
                <th className="Nada"> </th>
                {[...Array(18)].map((_, i) => (
                  <th key={i} className="Nada">{i + 1}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="Nada">1</th>
                <td className="Não-metais">
                  H <sup>1</sup> <br />
                  <p>Hidrogênio</p>
                </td>
                <td colSpan="16" className="Nada"></td>
                <td className="Gases-nobre">
                  He <sup>2</sup> <br />
                  <p>Hélio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">2</th>
                <td className="Metais-alcalinos">
                  Li<sup>3</sup> <br />
                  <p>Lítio</p>
                </td>
                <td className="Metais-alcalinos-terrosos">
                  Be<sup>4</sup> <br />
                  <p>Berílio</p>
                </td>
                <td colSpan="10" className="Nada"></td>
                <td className="Semi-metais">
                  B<sup>5</sup> <br />
                  <p>Boro</p>
                </td>
                <td className="Não-metais">
                  C<sup>6</sup> <br />
                  <p>Carbono</p>
                </td>
                <td className="Não-metais">
                  N<sup>7</sup> <br />
                  <p>Nitrogênio</p>
                </td>
                <td className="Não-metais">
                  O<sup>8</sup> <br />
                  <p>Oxigênio</p>
                </td>
                <td className="Halogênios">
                  F<sup>9</sup> <br />
                  <p>Flúor</p>
                </td>
                <td className="Gases-nobre">
                  Ne<sup>10</sup> <br />
                  <p>Neônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">3</th>
                <td className="Metais-alcalinos">
                  Na<sup>11</sup> <br />
                  <p>Sódio</p>
                </td>
                <td className="Metais-alcalinos-terrosos">
                  Mg<sup>12</sup> <br />
                  <p>Magnésio</p>
                </td>
                <td colSpan="10" className="Nada"></td>
                <td className="Outros-metais">
                  Al<sup>13</sup> <br />
                  <p>Alumínio</p>
                </td>
                <td className="Semi-metais">
                  Si<sup>14</sup> <br />
                  <p>Silício</p>
                </td>
                <td className="Não-metais">
                  P<sup>15</sup> <br />
                  <p>Fósforo</p>
                </td>
                <td className="Não-metais">
                  S<sup>16</sup> <br />
                  <p>Enxofre</p>
                </td>
                <td className="Halogênios">
                  Cl<sup>17</sup> <br />
                  <p>Cloro</p>
                </td>
                <td className="Gases-nobre">
                  Ar<sup>18</sup> <br />
                  <p>Argônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">4</th>
                <td className="Metais-alcalinos">
                  K<sup>19</sup> <br />
                  <p>Potássio</p>
                </td>
                <td className="Metais-alcalinos-terrosos">
                  Ca<sup>20</sup> <br />
                  <p>Cálcio</p>
                </td>
                <td className="Metais-de-transição">
                  Sc<sup>21</sup> <br />
                  <p>Escândio</p>
                </td>
                <td className="Metais-de-transição">
                  Ti<sup>22</sup> <br />
                  <p>Titânio</p>
                </td>
                <td className="Metais-de-transição">
                  V<sup>23</sup> <br />
                  <p>Vanádio</p>
                </td>
                <td className="Metais-de-transição">
                  Cr<sup>24</sup> <br />
                  <p>Cromo</p>
                </td>
                <td className="Metais-de-transição">
                  Mn<sup>25</sup> <br />
                  <p>Manganês</p>
                </td>
                <td className="Metais-de-transição">
                  Fe<sup>26</sup> <br />
                  <p>Ferro</p>
                </td>
                <td className="Metais-de-transição">
                  Co<sup>27</sup> <br />
                  <p>Cobalto</p>
                </td>
                <td className="Metais-de-transição">
                  Ni<sup>28</sup> <br />
                  <p>Níquel</p>
                </td>
                <td className="Metais-de-transição">
                  Cu<sup>29</sup> <br />
                  <p>Cobre</p>
                </td>
                <td className="Metais-de-transição">
                  Zn<sup>30</sup> <br />
                  <p>Zinco</p>
                </td>
                <td className="Outros-metais">
                  Ga<sup>31</sup> <br />
                  <p>Gálio</p>
                </td>
                <td className="Semi-metais">
                  Ge<sup>32</sup> <br />
                  <p>Germânio</p>
                </td>
                <td className="Semi-metais">
                  As<sup>33</sup><br />
                  <p>Arsênio</p>
                </td>
                <td className="Não-metais">
                  Se<sup>34</sup><br />
                  <p>Selênio</p>
                </td>
                <td className="Halogênios">
                  Br<sup>35</sup><br />
                  <p>Bromo</p>
                </td>
                <td className="Gases-nobre">
                  Kr<sup>36</sup> <br />
                  <p>Criptônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">5</th>
                <td className="Metais-alcalinos">
                  Rb<sup>37</sup> <br />
                  <p>Rubídio</p>
                </td>
                <td className="Metais-alcalinos-terrosos">
                  Sr<sup>38</sup> <br />
                  <p>Estrôncio</p>
                </td>
                <td className="Metais-de-transição">
                  Y<sup>39</sup> <br />
                  <p>Ítrio</p>
                </td>
                <td className="Metais-de-transição">
                  Zr<sup>40</sup> <br />
                  <p>Zircônio</p>
                </td>
                <td className="Metais-de-transição">
                  Nb<sup>41</sup> <br />
                  <p>Nióbio</p>
                </td>
                <td className="Metais-de-transição">
                  Mo<sup>42</sup> <br />
                  <p>Molibdênio</p>
                </td>
                <td className="Metais-de-transição">
                  Tc<sup>43</sup><br />
                  <p>Tecnécio</p>
                </td>
                <td className="Metais-de-transição">
                  Ru<sup>44</sup><br />
                  <p>Rutênio</p>
                </td>
                <td className="Metais-de-transição">
                  Rh<sup>45</sup><br />
                  <p>Ródio</p>
                </td>
                <td className="Metais-de-transição">
                  Pd<sup>46</sup><br />
                  <p>Paládio</p>
                </td>
                <td className="Metais-de-transição">
                  Ag<sup>47</sup><br />
                  <p>Prata</p>
                </td>
                <td className="Metais-de-transição">
                  Cd<sup>48</sup><br />
                  <p>Cádmio</p>
                </td>
                <td className="Outros-metais">
                  In<sup>49</sup><br />
                  <p>Índio</p>
                </td>
                <td className="Outros-metais">
                  Sn<sup>50</sup><br />
                  <p>Estanho</p>
                </td>
                <td className="Semi-metais">
                  Sb<sup>51</sup><br />
                  <p>Antimônio</p>
                </td>
                <td className="Semi-metais">
                  Te<sup>52</sup><br />
                  <p>Telúrio</p>
                </td>
                <td className="Halogênios">
                  I<sup>53</sup><br />
                  <p>Iodo</p>
                </td>
                <td className="Gases-nobre">
                  Xe<sup>54</sup><br />
                  <p>Xenônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">6</th>
                <td className="Metais-alcalinos">
                  Cs<sup>55</sup><br />
                  <p>Césio</p>
                </td>
                <td className="Metais-alcalinos-terrosos">
                  Ba<sup>56</sup><br />
                  <p>Bário</p>
                </td>
                <td colSpan="1" className="Nada"></td>
                <td className="Metais-de-transição">
                  Hf<sup>72</sup><br />
                  <p>Háfnio</p>
                </td>
                <td className="Metais-de-transição">
                  Ta<sup>73</sup><br />
                  <p>Tântalo</p>
                </td>
                <td className="Metais-de-transição">
                  W<sup>74</sup><br />
                  <p>Tungstênio</p>
                </td>
                <td className="Metais-de-transição">
                  Re<sup>75</sup><br />
                  <p>Rênio</p>
                </td>
                <td className="Metais-de-transição">
                  Os<sup>76</sup><br />
                  <p>Ósmio</p>
                </td>
                <td className="Metais-de-transição">
                  Ir<sup>77</sup><br />
                  <p>Irídio</p>
                </td>
                <td className="Metais-de-transição">
                  Pt<sup>78</sup><br />
                  <p>Platina</p>
                </td>
                <td className="Metais-de-transição">
                  Au<sup>79</sup><br />
                  <p>Ouro</p>
                </td>
                <td className="Metais-de-transição">
                  Hg<sup>80</sup><br />
                  <p>Mercúrio</p>
                </td>
                <td className="Outros-metais">
                  Tl<sup>81</sup><br />
                  <p>Tálio</p>
                </td>
                <td className="Outros-metais">
                  Pb<sup>82</sup><br />
                  <p>Chumbo</p>
                </td>
                <td className="Outros-metais">
                  Bi<sup>83</sup><br />
                  <p>Bismuto</p>
                </td>
                <td className="Semi-metais">
                  Po<sup>84</sup><br />
                  <p>Polônio</p>
                </td>
                <td className="Halogênios">
                  At<sup>85</sup><br />
                  <p>Astato</p>
                </td>
                <td className="Gases-nobre">
                  Rn<sup>86</sup><br />
                  <p>Radônio</p>
                </td>
              </tr>
              <tr>
                <th className="Nada">7</th>
                <td className="Metais-alcalinos">
                  Fr<sup>87</sup><br />
                  <p>Frâncio</p>
                </td>
                <td className="Metais-alcalinos-terrosos">
                  Ra<sup>88</sup><br />
                  <p>Rádio</p>
                </td>
                <td colSpan="1" className="Nada"></td>
                <td className="Metais-de-transição">
                  Rf<sup>104</sup><br />
                  <p>Rutherfórdio</p>
                </td>
                <td className="Metais-de-transição">
                  Db<sup>105</sup><br />
                  <p>Dúbnio</p>
                </td>
                <td className="Metais-de-transição">
                  Sg<sup>106</sup><br />
                  <p>Seabórgio</p>
                </td>
                <td className="Metais-de-transição">
                  Bh<sup>107</sup><br />
                  <p>Bóhrio</p>
                </td>
                <td className="Metais-de-transição">
                  Hs<sup>108</sup><br />
                  <p>Hássio</p>
                </td>
                <td className="Metais-de-transição">
                  Mt<sup>109</sup><br />
                  <p>Meitnério</p>
                </td>
                <td className="Metais-de-transição">
                  Ds<sup>110</sup><br />
                  <p>Darmstádio</p>
                </td>
                <td className="Metais-de-transição">
                  Rg<sup>111</sup><br />
                  <p>Roentgênio</p>
                </td>
                <td className="Metais-de-transição">
                  Cn<sup>112</sup><br />
                  <p>Copernício</p>
                </td>
                <td className="Outros-metais">
                  Nh<sup>113</sup><br />
                  <p>Nihônio</p>
                </td>
                <td className="Outros-metais">
                  Fl<sup>114</sup><br />
                  <p>Fleróvio</p>
                </td>
                <td className="Outros-metais">
                  Mc<sup>115</sup><br />
                  <p>Moscóvio</p>
                </td>
                <td className="Outros-metais">
                  Lv<sup>116</sup><br />
                  <p>Livermório</p>
                </td>
                <td className="Halogênios">
                  Ts<sup>117</sup><br />
                  <p>Tenessino</p>
                </td>
                <td className="Gases-nobre">
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
              <th> 8</th>
              <td className="Lantanideos">
                La<sup>57</sup><br />
                <p>Lantânio</p>
              </td>
              <td className="Lantanideos">
                Ce<sup>58</sup><br />
                <p>Cério</p>
              </td>
              <td className="Lantanideos">
                Pr<sup>59</sup><br />
                <p>Praseodímio</p>
              </td>
              <td className="Lantanideos">
                Nd<sup>60</sup><br />
                <p>Neodímio</p>
              </td>
              <td className="Lantanideos">
                Pm<sup>61</sup><br />
                <p>Promécio</p>
              </td>
              <td className="Lantanideos">
                Sm<sup>62</sup><br />
                <p>Samário</p>
              </td>
              <td className="Lantanideos">
                Eu<sup>63</sup><br />
                <p>Európio</p>
              </td>
              <td className="Lantanideos">
                Gd<sup>64</sup><br />
                <p>Gadolínio</p>
              </td>
              <td className="Lantanideos">
                Tb<sup>65</sup><br />
                <p>Térbio</p>
              </td>
              <td className="Lantanideos">
                Dy<sup>66</sup><br />
                <p>Disprósio</p>
              </td>
              <td className="Lantanideos">
                Ho<sup>67</sup><br />
                <p>Hólmio</p>
              </td>
              <td className="Lantanideos">
                Er<sup>68</sup><br />
                <p>Érbio</p>
              </td>
              <td className="Lantanideos">
                Tm<sup>69</sup><br />
                <p>Túlio</p>
              </td>
              <td className="Lantanideos">
                Yb<sup>70</sup><br />
                <p>Itérbio</p>
              </td>
              <td className="Lantanideos">
                Lu<sup>71</sup><br />
                <p>Lutécio</p>
              </td>
            </tr>
              <tr>
              <th className="Nada"></th>
               <td colSpan="2" className="Nada"></td>
              <th> 9 </th>
            <td className="Actinideos">
              Ac<sup>89</sup><br />
              <p>Actínio</p>
            </td>
            <td className="Actinideos">
              Th<sup>90</sup><br />
              <p>Tório</p>
            </td>
            <td className="Actinideos">
              Pa<sup>91</sup><br />
              <p>Protactínio</p>
            </td>
            <td className="Actinideos">
              U<sup>92</sup><br />
              <p>Urânio</p>
            </td>
            <td className="Actinideos">
              Np<sup>93</sup><br />
              <p>Neptúnio</p>
            </td>
            <td className="Actinideos">
              Pu<sup>94</sup><br />
              <p>Plutônio</p>
            </td>
            <td className="Actinideos">
              Am<sup>95</sup><br />
              <p>Amerício</p>
            </td>
            <td className="Actinideos">
              Cm<sup>96</sup><br />
              <p>Cúrio</p>
            </td>
            <td className="Actinideos">
              Bk<sup>97</sup><br />
              <p>Berquélio</p>
            </td>
            <td className="Actinideos">
              Cf<sup>98</sup><br />
              <p>Califórnio</p>
            </td>
            <td className="Actinideos">
              Es<sup>99</sup><br />
              <p>Einstênio</p>
            </td>
            <td className="Actinideos">
              Fm<sup>100</sup><br />
              <p>Férmio</p>
            </td>
            <td className="Actinideos">
              Md<sup>101</sup><br />
              <p>Mendelévio</p>
            </td>
            <td className="Actinideos">
              No<sup>102</sup><br />
              <p>Nobélio</p>
            </td>
            <td className="Actinideos">
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
}); 

export default Tabela;