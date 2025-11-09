import { useLocation, useNavigate } from "react-router-dom"

const Nav = () => {
    const navegar = useNavigate()
    const rotaAtiva = useLocation()

    return(
        <div className='fixed top-0 w-full items-center bg-cinzaPadao'>
            {/*<img className='w-8 h-8 mx-3' src={idioma == 'portugues' ?'https://cdn-icons-png.flaticon.com/512/3909/3909370.png' : idioma == 'espanhol' ? 'https://cdn-icons-png.flaticon.com/512/323/323365.png' : 'https://cdn-icons-png.flaticon.com/512/197/197374.png'} />*/}
            <select className='m-3 px-2 py-1 text-xl border border-zinc-500 rounded-lg' onChange={(e) => navegar(rotaAtiva.pathname.length > 3 ? `${rotaAtiva.pathname.split('/')[1]}/${e.target.value}` : e.target.value)}>
                <option value=''>Português</option>
                <option value='ep'>Espanhol</option>
                <option value='en'>Inglês</option>
            </select>
        </div>
    )
}

export default Nav