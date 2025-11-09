import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router-dom"
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

function App(){
  const carregamento = false
  const linkBackend = 'https://wtn-pay-backend.onrender.com/'

  return(
    <Router>
      <div className="flex flex-col h-screen bg-cinzaPadao">

        <header className="fixed top-0 left-0 w-full h-16 bg-white shadow z-10"><Nav /></header>
        
        <main className="flex-1 mt-16 px-4 flex justify-center items-start overflow-y-auto">
          <div className="w-full max-w-2xl">
            <Routes>
              <Route path="/" element={<Navigate to="pt" replace />} />
              <Route path="/pt" element={<InicioPt logo={logo} />} />
              <Route path="/ep" element={<InicioEp logo={logo} />} />
              <Route path="/en" element={<InicioEn logo={logo} />} />

              <Route path="/formulario/pt" element={<FormularioPt logo={logo} linkBackend={linkBackend} />} />
              <Route path="/formulario/ep" element={<FormularioEp logo={logo} linkBackend={linkBackend} />} />
              <Route path="/formulario/en" element={<FormularioEn logo={logo} linkBackend={linkBackend} />} />

              <Route path="/concluido/pt" element={<ConcluidoPt logo={logo} />} />
              <Route path="/concluido/ep" element={<ConcluidoEp logo={logo} />} />
              <Route path="/concluido/en" element={<ConcluidoEn logo={logo} />} />
            </Routes>
          </div>
        </main>

        <Carregamento carregamento={carregamento} />
      </div>
    </Router>
  )
}

export default App

