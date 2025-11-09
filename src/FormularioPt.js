import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormularioPt = (props) => {
  const navegar = useNavigate()

  const [indicador, setIndicador] = useState("")
  const [indicado, setIndicado] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [pais, setPais] = useState("")
  const [moeda, setMoeda] = useState("")
  const [pin, setPin] = useState("")

  const [indicadorStatus, setIndicadorStatus] = useState({ carregando: false, valido: null, mensagem: "" })
  const [indicadoStatus, setIndicadoStatus] = useState({ carregando: false, existe: null, mensagem: "" })
  const [enviando, setEnviando] = useState(false)

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()

        if (!indicadorStatus.valido) return
        if (indicadoStatus.existe) return
        if (email !== confirmEmail) return
        if (pin.length !== 4) return

        setEnviando(true)

        const item = {
          indicador,
          indicado,
          nome,
          email,
          pais,
          moeda,
          pin,
        }
      
        try {
          console.log('enviando')
          await fetch(`${props.linkBackend}rotasForm/addform`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item),
          })
          navegar("/concluido/pt")
        } catch (erro) {
          console.error("Erro ao enviar formulário:", erro)
        } finally {
          setEnviando(false)
        }
      }}
      className="flex flex-col items-center w-full max-w-md mx-auto px-4 py-10 gap-4 text-base md:text-lg font-sans text-zinc-600"
    >
      <img src={props.logo} alt="Logo" className="w-32 md:w-48 mb-6" />
      <label className="font-bold text-center mb-2">Por favor, complete seus dados</label>

      <div className="w-full">
        <input
          type="tel"
          placeholder="Celular do indicador"
          required
          value={indicador}
          onChange={(e) => setIndicador(e.target.value)}
          onBlur={async () => {
            if (indicador.length < 8) return
            setIndicadorStatus({ carregando: true, valido: null, mensagem: "Verificando indicador..." })

            const resposta = await fetch(`${props.linkBackend}rotasForm/verificar-indicador`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ indicador }),
            })
            const data = await resposta.json()
          
            if (data.existe) {
              setIndicadorStatus({ carregando: false, valido: true, mensagem: "Indicador encontrado ✔️" })
            } else {
              setIndicadorStatus({ carregando: false, valido: false, mensagem: "Número do indicador não cadastrado ❌" })
            }
          }}
          className={`w-full border rounded-lg p-3 ${
            indicadorStatus.valido === false ? "border-red-500" : "border-zinc-400"
          }`}
        />
        <p
          className={`text-sm mt-1 ${
            indicadorStatus.carregando
              ? "text-blue-500"
              : indicadorStatus.valido
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {indicadorStatus.mensagem}
        </p>
      </div>

      <div className="w-full">
        <input
          type="tel"
          placeholder="Número de seu celular"
          required
          value={indicado}
          onChange={(e) => setIndicado(e.target.value)}
          onBlur={async () => {
            if (indicado.length < 8) return
            setIndicadoStatus({ carregando: true, existe: null, mensagem: "Verificando seu número..." })

            const resposta = await fetch(`${props.linkBackend}rotasForm/verificar-indicado`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ celular: indicado }),
            })
            const data = await resposta.json()
          
            if (data.existe) {
              setIndicadoStatus({ carregando: false, existe: true, mensagem: "Este número já está cadastrado ❌" })
            } else {
              setIndicadoStatus({ carregando: false, existe: false, mensagem: "Número válido para cadastro ✔️" })
            }
          }}
          className={`w-full border rounded-lg p-3 ${
            indicadoStatus.existe === true ? "border-red-500" : "border-zinc-400"
          }`}
        />
        <p
          className={`text-sm mt-1 ${
            indicadoStatus.carregando
              ? "text-blue-500"
              : indicadoStatus.existe
              ? "text-red-600"
              : "text-green-600"
          }`}
        >
          {indicadoStatus.mensagem}
        </p>
      </div>

      <input type="text" placeholder="Nome completo" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setNome(e.target.value)} />
      <input type="email" placeholder="Seu e-mail" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
      <input type="email" placeholder="Confirme seu e-mail" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
      <input type="text" placeholder="Seu país" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setPais(e.target.value)} />
      <input type="text" placeholder="Moeda do país" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setMoeda(e.target.value)} />
      <input type="password" placeholder="Defina um PIN de 4 números" required maxLength="4" className="w-full border border-zinc-400 rounded-lg p-3 tracking-widest text-center" onChange={(e) => setPin(e.target.value)} />

      <button
        type="submit"
        disabled={
          enviando ||
          indicadorStatus.carregando ||
          indicadoStatus.carregando ||
          !indicadorStatus.valido ||
          indicadoStatus.existe
        }
        className={`w-full px-6 py-3 mt-4 rounded-2xl text-white text-lg md:text-xl font-bold transition ${
          enviando ||
          indicadorStatus.carregando ||
          indicadoStatus.carregando ||
          !indicadorStatus.valido ||
          indicadoStatus.existe
            ? "bg-zinc-400 cursor-not-allowed"
            : "bg-zinc-600 hover:bg-zinc-700 cursor-pointer"
        }`}
      >
        {enviando ? "Enviando..." : "Enviar"}
      </button>
    </form>
  )
}

export default FormularioPt