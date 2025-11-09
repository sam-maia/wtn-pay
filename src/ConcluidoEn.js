import { useNavigate } from "react-router-dom"

const ConcluidoEn = ({ logo, setNavegacao }) => {
  const navegar = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center w-full h-full max-w-md mx-auto px-4 py-10 gap-8 text-center bg-cinzaPadao text-zinc-600 font-sans">
      <img src={logo} alt="Logo" className="w-32 md:w-48" />
      <h2 className="text-xl md:text-2xl font-bold">Your registration was successful.</h2>
      <button onClick={() => navegar("/en")} className="px-6 py-3 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition">Conclude</button>
    </div>
  )
}

export default ConcluidoEn