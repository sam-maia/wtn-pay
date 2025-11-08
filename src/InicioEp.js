/*import { useNavigate } from "react-router-dom"

const InicioEp = (props) => {
    const navegar = useNavigate()

    return(
        <div className="flex flex-col w-screen items-center gap-8 text-3xl font-sans font-bold text-zinc-500 mx-auto bg-cinzaPadao">
            <img src={props.logo} className="w-3/5 my-6" />
            <div className="flex flex-col gap-16 w-3/4 text-center">
                <div>Programa de recompensas</div>
                <div>Sistema de Afiliados Premium</div>
            </div>
            <button onClick={() => navegar('formulario')} className="px-6 py-3 rounded-2xl text-white text-xl font-bold bg-zinc-600">Continuar</button>
        </div>
    )
}

export default InicioEp*/




import { useNavigate } from "react-router-dom"

const InicioEp = (props) => {
    const navegar = useNavigate()

    return(
        <div className="flex flex-col items-center gap-10 text-2xl md:text-3xl font-sans font-bold text-zinc-600 w-full px-4 py-10">
            <img src={props.logo} className="w-40 md:w-60" />
            <div className="flex flex-col gap-6 w-full text-center">
                <div>Programa de recompensas</div>
                <div>Sistema de Afiliados Premium</div>
            </div>
            <button onClick={() => navegar('/formulario/ep')} className="px-6 py-3 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition">Continuar</button>
        </div>
    )
}

export default InicioEp