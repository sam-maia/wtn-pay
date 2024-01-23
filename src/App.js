import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { listas } from './FazGet';
import InicioPt from './InicioPt';
import InicioEp from './InicioEp';
import FormularioPt from './FormularioPt';
import FormularioEp from './FormularioEp';
import ConcluidoPt from './ConcluidoPt';
import ConcluidoEp from './ConcluidoEp';
import logo from './imgs/logo.jpg'
import './App.css';

function App() {
  const [idioma, setIdioma] = useState('portugues')
  const cadastrados = listas('https://wtn-pay-backend.onrender.com/rotasForm')
console.log(cadastrados)
  return (
    <Router>
      <div className='flex md:w-96 mx-auto items-center bg-cinzaPadao'>
        <img className='w-8 h-8 mx-3' src={idioma == 'portugues' ?'https://cdn-icons-png.flaticon.com/512/3909/3909370.png' : 'https://cdn-icons-png.flaticon.com/512/323/323365.png'} />
        <select className='m-3 px-2 py-1 text-xl border border-zinc-500 rounded-lg' onChange={(e) => setIdioma(e.target.value)}>
          <option value='portugues'>Português</option>
          <option value='espanhol'>Espanhol</option>
        </select>
      </div>
      <Routes>
        <Route exact path='/' element={
          idioma == 'portugues' ? <InicioPt logo={logo} /> : <InicioEp logo={logo} />
        }>
        </Route>
        <Route exact path='/formulario' element={
          idioma == 'portugues' ? <FormularioPt logo={logo} cadastrados={cadastrados} /> : <FormularioEp logo={logo} cadastrados={cadastrados} />
        }>
        </Route>
        <Route exct path='/concluido' element={
          idioma == 'portugues' ? <ConcluidoPt logo={logo} /> : <ConcluidoEp logo={logo} />
        }>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
