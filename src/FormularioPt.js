/*import { useState } from "react"

const FormularioPt = (props) => {
    const [indicador, setIndicador] = useState(false)
    const [indicado, setIndicado] = useState(false)
    const [nome, setNome] = useState(false)
    const [email, setEmail] = useState(false)
    const [confirmEmail, setConfirmEmail] = useState(false)
    const [pais, setPais] = useState(false)
    const [moeda, setMoeda] = useState(false)
    const [pin, setPin] = useState(false)
    //let pesquisaIndicador = props.navegacao == 'formulario' ? props.cadastrados.filter((elemento) => elemento.celular == indicador) : false
    //let pesquisaIndicado = props.navegacao == 'formulario' ? props.cadastrados.filter((elemento) => elemento.celular == indicado) : false
    //let pesquisaEmail = props.navegacao == 'formulario' ? props.cadastrados.filter((elemento) => elemento.email == email) : false
    console.log(props.cadastrados)
    return(
        <form method="POST" className="flex flex-col w-screen h-auto items-center gap-2 mt-52 text-xl font-sans text-zinc-500 bg-cinzaPadao mx-auto">
            <img src={props.logo} className="w-2/5" />
            <label className="font-bold mt-6">Por favor, complete seus dados</label>
            <input type='tel' placeholder='Celular do indicador' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicador(e.target.value)} />
            <input type='tel' placeholder='Número de seu celular' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicado(e.target.value)} />
            <input type='text' placeholder='Nome completo' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setNome(e.target.value)} />
            <input type='text' placeholder='Seu e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Confirme seu e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
            <input type='text' placeholder='Seu país' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setPais(e.target.value)} />
            <input type='text' placeholder='Moeda do país' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setMoeda(e.target.value)} />
            <input type='text' maxLength='4' placeholder='Defina um PIN de 4 números' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setPin(e.target.value)} />
            <input type="submit" value="Enviar" className="px-6 py-3 mb-6 rounded-2xl text-white text-xl font-bold bg-zinc-600" onClick={(e) => {
                e.preventDefault()
                /*if(pesquisaIndicador[0] == undefined || pesquisaIndicado[0] != undefined || pesquisaEmail[0] != undefined || email != confirmEmail || pin.length != 4 || indicado == false || nome == false || email == false || pais == false || moeda == false){
                    if(pesquisaIndicador[0] == undefined){window.alert('Numero de Celular do indicador não cadastrado!')}
                    if(pesquisaIndicado[0] != undefined){window.alert('Numero de Celular já cadastrado!')}
                    if(pesquisaEmail[0] != undefined){window.alert('Email já cadastrado!')}
                    if(email != confirmEmail){window.alert('Email não corresponde com confirmação de Email!')}
                    if(pin.length != 4){window.alert('Pin deve conter 4 dígitos!')}
                    if(indicado == false || nome == false || email == false || pais == false || moeda == false){window.alert('Complete todos os campos!')}
                }else{*/
                  /*  let item = {
                        indicador: indicador,
                        indicado: indicado,
                        nome: nome,
                        email: email,
                        pais: pais,
                        moeda: moeda,
                        pin: pin
                    }
                    console.log('formulario ok')
                    fetch('https://wtn-pay-backend.onrender.com/rotasForm/addform', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(item)
                    }).then(props.setNavegacao('concluido'))
             //   }
            }} />
      </form>
    )
}

export default FormularioPt


import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormularioPt = ({ logo }) => {
  const navegar = useNavigate()
  const [indicador, setIndicador] = useState(false)
  const [indicado, setIndicado] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [pais, setPais] = useState("")
  const [moeda, setMoeda] = useState("")
  const [pin, setPin] = useState("")
  const [pesquisaIndicador, setPesquisaIndicador] = useState(false)
  const [pesquisaIndicado, setPesquisaIndicado] = useState(false)

  return(
    <form method="POST" className="flex flex-col items-center w-full max-w-md mx-auto px-4 py-10 gap-4 text-base md:text-lg font-sans text-zinc-600">
      <img src={logo} alt="Logo" className="w-32 md:w-48 mb-6" />
      <label className="font-bold text-center mb-2">Por favor, complete seus dados</label>

      <input type="tel" placeholder="Celular do indicador" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => async () => {
        if(e.target.value.length >= 4){
        const resposta = await fetch("http://localhost:5000/verificar-celular", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(e.target.value),
        })

        const data = await resposta.json()

        if(data.existe){
          setIndicador(true)
        }else{
          setIndicador(false)
        }
        }
      }} />
      <input type="tel" placeholder="Número de seu celular" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setIndicado(e.target.value)} />
      <input type="text" placeholder="Nome completo" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setNome(e.target.value)} />
      <input type="email" placeholder="Seu e-mail" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
      <input type="email" placeholder="Confirme seu e-mail" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
      <input type="text" placeholder="Seu país" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setPais(e.target.value)} />
      <input type="text" placeholder="Moeda do país" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setMoeda(e.target.value)} />
      <input type="password" placeholder="Defina um PIN de 4 números" required maxLength="4" className="w-full border border-zinc-400 rounded-lg p-3 tracking-widest text-center" onChange={(e) => setPin(e.target.value)} />
      <input type="submit" value="Enviar" className="w-full px-6 py-3 mt-4 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition cursor-pointer" onClick={(e) => {
        e.preventDefault()
        if(pesquisaIndicador === false){window.alert('Numero de Celular do indicador não cadastrado!')}else{
          if(pesquisaIndicado === true){window.alert('Numero de Celular já cadastrado!')}else{
            if(email !== confirmEmail){window.alert('Email não corresponde com confirmação de Email!')}else{
              if(pin.length !== 4){window.alert('Pin deve conter 4 dígitos!')}else{
                let item = {
                  indicador: indicador,
                  indicado: indicado,
                  nome: nome,
                  email: email,
                  pais: pais,
                  moeda: moeda,
                  pin: pin
                }
                console.log('formulario ok')
                fetch('https://wtn-pay-backend.onrender.com/rotasForm/addform', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(item)
                }).then(navegar('concluido'))
              }
            }
          }
        }
      }} />
    </form>
  )
}

export default FormularioPt

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormularioPt = ({ logo }) => {
  const navegar = useNavigate()

  const [indicador, setIndicador] = useState("")      
  const [indicado, setIndicado] = useState("")         
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [pais, setPais] = useState("")
  const [moeda, setMoeda] = useState("")
  const [pin, setPin] = useState("")
  const [pesquisaIndicador, setPesquisaIndicador] = useState(null)
  const [pesquisaIndicado, setPesquisaIndicado] = useState(null)

  // 🔍 Função para verificar se o número já está cadastrado
  const verificarCelular = async (celular, tipo) => {
    if (celular.length < 4) return

    try {
      const resposta = await fetch("http://localhost:5000/verificar-celular", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ celular }),
      })

      const data = await resposta.json()

      if (tipo === "indicador") {
        setPesquisaIndicador(data.existe)
      } else {
        setPesquisaIndicado(data.existe)
      }
    } catch (erro) {
      console.error("Erro ao verificar celular:", erro)
    }
  }

  const enviarFormulario = async (e) => {
    e.preventDefault()

    if(pesquisaIndicador === false){
      return alert("Número do indicador não cadastrado!")
    }else{
      if(pesquisaIndicado === true){
        return alert("Seu número de celular já está cadastrado!")
      }else{
        if(email !== confirmEmail) {
          return alert("O e-mail e a confirmação não coincidem!")
        }else{
          if (pin.length !== 4) {
            return alert("O PIN deve conter exatamente 4 dígitos!")
          }else{

            const item = { indicador, indicado, nome, email, pais, moeda, pin }

            try {
              await fetch("https://wtn-pay-backend.onrender.com/rotasForm/addform", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
              })
            
              console.log("Formulário enviado com sucesso")
              navegar("/concluido")
            } catch (erro) {
              console.error("Erro ao enviar formulário:", erro)
            }
          }
        }
      }
    }
  }

  return (
    <form
      onSubmit={enviarFormulario}
      className="flex flex-col items-center w-full max-w-md mx-auto px-4 py-10 gap-4 text-base md:text-lg font-sans text-zinc-600"
    >
      <img src={logo} alt="Logo" className="w-32 md:w-48 mb-6" />
      <label className="font-bold text-center mb-2">
        Por favor, complete seus dados
      </label>

      <input
        type="tel"
        placeholder="Celular do indicador"
        required
        value={indicador}
        className="w-full border border-zinc-400 rounded-lg p-3"
        onChange={(e) => {
          setIndicador(e.target.value)
          verificarCelular(e.target.value, "indicador")
        }}
      />

      <input
        type="tel"
        placeholder="Número de seu celular"
        required
        value={indicado}
        className="w-full border border-zinc-400 rounded-lg p-3"
        onChange={(e) => {
          setIndicado(e.target.value)
          verificarCelular(e.target.value, "indicado")
        }}
      />

      <input
        type="text"
        placeholder="Nome completo"
        required
        className="w-full border border-zinc-400 rounded-lg p-3"
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        required
        className="w-full border border-zinc-400 rounded-lg p-3"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="email"
        placeholder="Confirme seu e-mail"
        required
        className="w-full border border-zinc-400 rounded-lg p-3"
        onChange={(e) => setConfirmEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Seu país"
        required
        className="w-full border border-zinc-400 rounded-lg p-3"
        onChange={(e) => setPais(e.target.value)}
      />
      <input
        type="text"
        placeholder="Moeda do país"
        required
        className="w-full border border-zinc-400 rounded-lg p-3"
        onChange={(e) => setMoeda(e.target.value)}
      />
      <input
        type="password"
        placeholder="Defina um PIN de 4 números"
        required
        maxLength="4"
        className="w-full border border-zinc-400 rounded-lg p-3 tracking-widest text-center"
        onChange={(e) => setPin(e.target.value)}
      />

      <input
        type="submit"
        value="Enviar"
        className="w-full px-6 py-3 mt-4 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition cursor-pointer"
      />
    </form>
  )
}

export default FormularioPt*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormularioPt = ({ logo }) => {
  const navegar = useNavigate()

  // Campos do formulário
  const [indicador, setIndicador] = useState("")
  const [indicado, setIndicado] = useState("")
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [pais, setPais] = useState("")
  const [moeda, setMoeda] = useState("")
  const [pin, setPin] = useState("")

  // Estados de verificação e mensagens
  const [indicadorStatus, setIndicadorStatus] = useState({ carregando: false, valido: null, mensagem: "" })
  const [indicadoStatus, setIndicadoStatus] = useState({ carregando: false, existe: null, mensagem: "" })
  const [enviando, setEnviando] = useState(false)


  // Quando o campo do INDICADOR perde o foco
const handleIndicadorBlur = async () => {
  if (indicador.length < 8) return
  setIndicadorStatus({ carregando: true, valido: null, mensagem: "Verificando indicador..." })

  const resposta = await fetch("http://localhost:5000/rotasForm/verificar-indicador", {
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
}

  // Quando o campo do INDICADO (usuário) perde o foco
const handleIndicadoBlur = async () => {
  if (indicado.length < 8) return
  setIndicadoStatus({ carregando: true, existe: null, mensagem: "Verificando seu número..." })

  const resposta = await fetch("http://localhost:5000/rotasForm/verificar-indicado", {
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
}

  // Submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validações antes de enviar
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
      await fetch("http://localhost:5000/rotasForm/addform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
      })
      navegar("/concluido")
    } catch (erro) {
      console.error("Erro ao enviar formulário:", erro)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full max-w-md mx-auto px-4 py-10 gap-4 text-base md:text-lg font-sans text-zinc-600"
    >
      <img src={logo} alt="Logo" className="w-32 md:w-48 mb-6" />
      <label className="font-bold text-center mb-2">Por favor, complete seus dados</label>

      {/* Celular do indicador */}
      <div className="w-full">
        <input
          type="tel"
          placeholder="Celular do indicador"
          required
          value={indicador}
          onChange={(e) => setIndicador(e.target.value)}
          onBlur={handleIndicadorBlur}
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

      {/* Celular do indicado */}
      <div className="w-full">
        <input
          type="tel"
          placeholder="Número de seu celular"
          required
          value={indicado}
          onChange={(e) => setIndicado(e.target.value)}
          onBlur={handleIndicadoBlur}
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

      {/* Restante do formulário */}
      <input type="text" placeholder="Nome completo" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setNome(e.target.value)} />
      <input type="email" placeholder="Seu e-mail" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
      <input type="email" placeholder="Confirme seu e-mail" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
      <input type="text" placeholder="Seu país" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setPais(e.target.value)} />
      <input type="text" placeholder="Moeda do país" required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setMoeda(e.target.value)} />
      <input type="password" placeholder="Defina um PIN de 4 números" required maxLength="4" className="w-full border border-zinc-400 rounded-lg p-3 tracking-widest text-center" onChange={(e) => setPin(e.target.value)} />

      {/* Botão de envio */}
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


