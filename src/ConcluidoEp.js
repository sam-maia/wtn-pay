import { useNavigate } from "react-router-dom"

const ConcluidoEp = ({ logo }) => {
  const navegar = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full max-w-md mx-auto px-4 gap-8 pb-20 text-center bg-cinzaPadao text-zinc-600 font-sans">
      <img src={logo} alt="Logo" className="w-32 md:w-48" />
      <h2 className="text-xl md:text-2xl font-bold">Su registro fue efectuado con suceso. Muchas gracias.</h2>
      <button onClick={() => navegar("/ep")} className="px-6 py-3 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition">Concluir</button>
    </div>
  )
}

export default ConcluidoEp