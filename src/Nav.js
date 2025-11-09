import { useLocation, useNavigate } from "react-router-dom"

const Nav = () => {
  const navegar = useNavigate()
  const rotaAtiva = useLocation()
  const idioma = rotaAtiva.pathname.split('/')[rotaAtiva.pathname.split('/').length - 1]
  const imgPT = 'https://cdn-icons-png.flaticon.com/512/3909/3909370.png'
  const imgEP = 'https://cdn-icons-png.flaticon.com/512/323/323365.png'
  const imgEN = 'https://cdn-icons-png.flaticon.com/512/197/197374.png'
console.log(rotaAtiva.pathname.split('/').length - 1)
  return (
    <div className="fixed top-0 w-full bg-cinzaPadao flex items-center p-3">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8" src={idioma === 'pt' ? imgPT : idioma === 'ep' ? imgEP : imgEN} alt="Bandeira do idioma" />
        <select className="px-2 py-1 text-xl border border-zinc-500 rounded-lg bg-white" onChange={(e) => navegar(
            rotaAtiva.pathname.length > 3 ? `${rotaAtiva.pathname.split('/')[1]}/${e.target.value}` : e.target.value 
        )} value={idioma}>
          <option value="pt">Português</option>
          <option value="ep">Espanhol</option>
          <option value="en">Inglês</option>
        </select>
      </div>
    </div>
  )
}

export default Nav
