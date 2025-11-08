/*const ConcluidoPt = (props) => {
    return(
        <div className="flex flex-col w-screen h-screen items-center gap-8 text-3xl font-sans font-bold text-zinc-500 md:w-96 mx-auto bg-cinzaPadao">
            <img src={props.logo} className="w-3/5 my-6" />
            <h2 className="flex flex-col gap-16 w-3/4 text-center">Seu cadastro foi efetuado com sucesso.</h2>
            <button onClick={() => props.setNavegacao('inicio')} className="px-6 py-3 rounded-2xl text-white text-xl font-bold bg-zinc-600">Concluir</button>
        </div>
    )
}

export default ConcluidoPt*/


import { useNavigate } from "react-router-dom"

const ConcluidoPt = ({ logo, setNavegacao }) => {
  const navegar = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-md mx-auto px-4 py-10 gap-8 text-center bg-cinzaPadao text-zinc-600 font-sans">
      <img src={logo} alt="Logo" className="w-32 md:w-48" />
      <h2 className="text-xl md:text-2xl font-bold">Seu cadastro foi efetuado com sucesso.</h2>
      <button onClick={() => navegar("/")} className="px-6 py-3 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition">Concluir</button>
    </div>
  )
}

export default ConcluidoPt
