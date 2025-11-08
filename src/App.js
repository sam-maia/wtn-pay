/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carregamento from './Carregamento';
import Nav from './Nav';
import InicioPt from './InicioPt';
import InicioEp from './InicioEp';
import InicioEn from './InicioEn';
import FormularioPt from './FormularioPt';
import FormularioEp from './FormularioEp';
import FormularioEn from './FormularioEn';
import ConcluidoPt from './ConcluidoPt';
import ConcluidoEp from './ConcluidoEp';
import ConcluidoEn from './ConcluidoEn';
import logo from './imgs/logo.jpg';
import './App.css';

function App() {
  const carregamento = false

  return (
    <Router>
      <div className='flex flex-col justify-center h-screen bg-cinzaPadao'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<InicioPt logo={logo} />} />
          <Route exact path='/ep' element={<InicioEp logo={logo} />} />
          <Route exact path='/en' element={<InicioEn logo={logo} />} />
          <Route exact path='/formulario' element={<FormularioPt logo={logo} />} />
          <Route exact path='/formulario/ep' element={<FormularioEp logo={logo} />} />
          <Route exact path='/formulario/en' element={<FormularioEn logo={logo} />} />
          <Route exact path='/concluidopt' element={<ConcluidoPt logo={logo} />} />
          <Route exact path='/concluidoep' element={<ConcluidoEp logo={logo} />} />
          <Route exact path='/concluidoen' element={<ConcluidoEn logo={logo} />} />
        </Routes>
        <Carregamento carregamento={carregamento} />
      </div>
    </Router>
  )
}

export default App;*/





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Carregamento from './Carregamento'
import Nav from './Nav'
import InicioPt from './InicioPt'
import InicioEp from './InicioEp'
import InicioEn from './InicioEn'
import FormularioPt from './FormularioPt'
import FormularioEp from './FormularioEp'
import FormularioEn from './FormularioEn'
import ConcluidoPt from './ConcluidoPt'
import ConcluidoEp from './ConcluidoEp'
import ConcluidoEn from './ConcluidoEn'
import logo from './imgs/logo.jpg'
import './App.css'

function App() {
  const carregamento = false

  return (
    <Router>
      <div className="flex flex-col h-screen bg-cinzaPadao">
        {/* Menu fixo */}
        <header className="fixed top-0 left-0 w-full h-16 bg-white shadow z-10">
          <Nav />
        </header>

        {/* Conteúdo principal */}
        <main className="flex-1 mt-16 px-4 flex justify-center items-start overflow-y-auto">
          <div className="w-full max-w-2xl">
            <Routes>
              <Route path="/" element={<InicioPt logo={logo} />} />
              <Route path="/ep" element={<InicioEp logo={logo} />} />
              <Route path="/en" element={<InicioEn logo={logo} />} />

              <Route path="/formulario" element={<FormularioPt logo={logo} />} />
              <Route path="/formulario/ep" element={<FormularioEp logo={logo} />} />
              <Route path="/formulario/en" element={<FormularioEn logo={logo} />} />

              <Route path="/concluido" element={<ConcluidoPt logo={logo} />} />
              <Route path="/concluido/ep" element={<ConcluidoEp logo={logo} />} />
              <Route path="/concluido/en" element={<ConcluidoEn logo={logo} />} />
            </Routes>
          </div>
        </main>

        {/* Loader */}
        <Carregamento carregamento={carregamento} />
      </div>
    </Router>
  )
}

export default App

