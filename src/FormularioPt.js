import { useState } from "react"

const FormularioPt = (props) => {
    const [indicador, setIndicador] = useState(false)
    const [indicado, setIndicado] = useState(false)
    const [emeil, setEmail] = useState(false)
    const [confirmEmail, setConfirmEmail] = useState(false)
    let pesquisaIndicador = props.cadastrados.filter((elemento) => elemento.celular == indicador)
    let pesquisaIndicado = props.cadastrados.filter((elemento) => elemento.celular == indicado)
    let pesquisaEmail = props.cadastrados.filter((elemento) => elemento.email == emeil)
    return(
        <form action="https://wtn-pay-backend.onrender.com/rotasForm/addform/" method="POST" className="flex flex-col w-screen h-screen items-center gap-2 text-xl font-sans text-zinc-500 md:w-96 mx-auto bg-cinzaPadao overflow-y-scroll">
            <img src={props.logo} className="w-2/5" />
            <label className="font-bold">Por favor, complete seus dados</label>
            <input name="indicador" type='tel' placeholder='Celular do indicador' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicador(e.target.value)} />
            <input name="celular" type='tel' placeholder='Número de seu celular' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicado(e.target.value)} />
            <input name="nome" type='text' placeholder='Nome completo' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="email" type='text' placeholder='Seu e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
            <input name="confirmEmail" type='text' placeholder='Confirme seu e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
            <input name="pais" type='text' placeholder='Seu país' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="moeda" type='text' placeholder='Moeda do país' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="pin" type='text' maxLength='4' placeholder='Defina um PIN de 4 números' required className="border border-zinc-500 rounded-lg p-3" />
            <input type="submit" value="Enviar" className="px-6 py-3 mb-3 rounded-2xl text-white text-xl font-bold bg-zinc-600" onClick={(e) => {
                if(pesquisaIndicador[0] == undefined || pesquisaIndicado[0] != undefined || pesquisaEmail[0] != undefined || emeil != confirmEmail){
                    e.preventDefault()
                    if(pesquisaIndicador[0] == undefined){window.alert('Numero de Celular do indicador não cadastrado!')}
                    if(pesquisaIndicado[0] != undefined){window.alert('Numero de Celular já cadastrado!')}
                    if(pesquisaEmail[0] != undefined){window.alert('Email já cadastrado!')}
                    if(emeil != confirmEmail){window.alert('Email não corresponde com confirmação de Email!')}
                }
            }} />
      </form>
    )
}

export default FormularioPt