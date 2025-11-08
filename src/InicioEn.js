import { useNavigate } from "react-router-dom"

const InicioEn = (props) => {
    const navegar = useNavigate()

    return(
        <div className="flex flex-col items-center gap-10 text-2xl md:text-3xl font-sans font-bold text-zinc-600 w-full px-4 py-10">
            <img src={props.logo} className="w-40 md:w-60" />
            <div className="flex flex-col gap-6 w-full text-center">
                <div>Rewards Program</div>
                <div>Premium Affiliate System</div>
            </div>
            <button onClick={() => navegar('/formulario/en')} className="px-6 py-3 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition">Continue</button>
        </div>
    )
}

export default InicioEn