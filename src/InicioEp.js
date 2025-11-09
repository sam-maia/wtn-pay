import { useNavigate } from "react-router-dom"

const InicioEp = (props) => {
    const navegar = useNavigate()

    return(
        <div className="min-h-screen flex flex-col items-center justify-center gap-10 pb-20 text-2xl md:text-3xl font-sans font-bold text-zinc-600 w-full px-4 bg-cinzaPadao">
            <img src={props.logo} alt="Logo" className="w-40 md:w-60" />
            <div className="flex flex-col gap-6 w-full text-center">
                <div>Programa de recompensas</div>
                <div>Sistema de Afiliados Premium</div>
            </div>
            <button onClick={() => navegar("/formulario/ep")} className="px-6 py-3 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition">Prosseguir</button>
        </div>
    )
}

export default InicioEp