import { useState } from 'react';
import { listas } from './FazGet';
import Carregamento from './Carregamento';
import InicioPt from './InicioPt';
import InicioEp from './InicioEp';
import InicioEn from './InicioEn';
import FormularioPt from './FormularioPt';
import FormularioEp from './FormularioEp';
import FormularioEn from './FormularioEn';
import ConcluidoPt from './ConcluidoPt';
import ConcluidoEp from './ConcluidoEp';
import ConcluidoEn from './ConcluidoEn';
import logo from './imgs/logo.jpg'
import './App.css';

function App() {
  const [idioma, setIdioma] = useState('portugues')
  const [navegacao, setNavegacao] = useState('inicio')
  const cadastrados = navegacao == 'formulario' ? listas('https://wtnpay.com/cadastros/rotasForm') : false
  const carregamento = navegacao == 'formulario' && cadastrados == false ? true : false

  return (
    <div>
      <div className='flex md:w-96 mx-auto items-center bg-cinzaPadao'>
        <img className='w-8 h-8 mx-3' src={idioma == 'portugues' ?'https://cdn-icons-png.flaticon.com/512/3909/3909370.png' : idioma == 'espanhol' ? 'https://cdn-icons-png.flaticon.com/512/323/323365.png' : 'https://cdn-icons-png.flaticon.com/512/197/197374.png'} />
        <select className='m-3 px-2 py-1 text-xl border border-zinc-500 rounded-lg' onChange={(e) => setIdioma(e.target.value)}>
          <option value='portugues'>Português</option>
          <option value='espanhol'>Espanhol</option>
          <option value='ingles'>Inglês</option>
        </select>
      </div>
      <InicioPt logo={logo} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <InicioEp logo={logo} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <InicioEn logo={logo} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <FormularioPt logo={logo} cadastrados={cadastrados} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <FormularioEp logo={logo} cadastrados={cadastrados} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <FormularioEn logo={logo} cadastrados={cadastrados} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <ConcluidoPt logo={logo} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <ConcluidoEp logo={logo} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <ConcluidoEn logo={logo} idioma={idioma} navegacao={navegacao} setNavegacao={setNavegacao} />
      <Carregamento carregamento={carregamento} />
    </div>
  )
}

export default App;
