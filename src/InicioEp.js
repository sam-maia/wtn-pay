import { Link } from "react-router-dom"

const InicioEp = (props) => {
    return(
        <div className="flex flex-col w-screen h-screen items-center gap-8 text-3xl font-sans font-bold text-zinc-500 md:w-96 mx-auto">
            <img src={props.logo} className="w-3/5 my-6" />
            <div className="flex flex-col gap-16 w-3/4 text-center">
                <div>Programa de recompensas</div>
                <div>Sistema de Afiliados Premium</div>
            </div>
            <Link to='/formulario' className="px-6 py-3 rounded-2xl text-white text-xl font-bold bg-zinc-600">Continuar</Link>
        </div>
    )
}

export default InicioEp