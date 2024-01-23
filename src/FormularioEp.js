import { useState } from "react"

const FormularioEp = (props) => {
    const [indicador, setIndicador] = useState(false)
    const [indicado, setIndicado] = useState(false)
    const [emeil, setEmail] = useState(false)
    const [confirmEmail, setConfirmEmail] = useState(false)
    let pesquisaIndicador = props.cadastrados.filter((elemento) => elemento.indicador == indicador)
    let pesquisaIndicado = props.cadastrados.filter((elemento) => elemento.celular == indicado)
    let pesquisaEmail = props.cadastrados.filter((elemento) => elemento.email == emeil)
    return(
        <form action="https://wtn-pay-backend.onrender.com/rotasForm/addform/" method="POST" className="flex flex-col w-screen h-screen items-center gap-2 text-xl font-sans text-zinc-500 md:w-96 mx-auto bg-cinzaPadao overflow-y-scroll">
            <img src={props.logo} className="w-2/5" />
            <label className="font-bold">Por favor, complete sus datos</label>
            <input name="indicador" type='tel' placeholder='Móvil del auspiciador' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicador(e.target.value)} />
            <input name="celular" type='tel' placeholder='Número de su móvil' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicado(e.target.value)} />
            <input name="nome" type='text' placeholder='Nombre completo' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="email" type='text' placeholder='Su e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
            <input name="confirmEmail" type='text' placeholder='Confirme su e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
            <input name="pais" type='text' placeholder='Su país' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="moeda" type='text' placeholder='Moneda de su país' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="pin" type='text' maxLength='4' placeholder='Elija un PIN de 4 números' required className="border border-zinc-500 rounded-lg p-3" />
            <input type="submit" placeholder="Enviar" className="px-6 py-3 mb-3 rounded-2xl text-white text-xl font-bold bg-zinc-600" onClick={(e) => {
                if(pesquisaIndicador[0] == undefined || pesquisaIndicado[0] != undefined || pesquisaEmail[0] != undefined || emeil != confirmEmail){
                    e.preventDefault()
                    if(pesquisaIndicador[0] == undefined){window.alert('¡El número de celular del indicador no está registrado!')}
                    if(pesquisaIndicado[0] != undefined){window.alert('¡Número de celular ya registrado!')}
                    if(pesquisaEmail[0] != undefined){window.alert('¡Correo electrónico ya registrado!')}
                    if(emeil != confirmEmail){window.alert('El correo electrónico no coincide con la confirmación del correo electrónico.')}
                }
            }} />
      </form>
    )
}

export default FormularioEp