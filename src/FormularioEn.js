import { useState } from "react"

const FormularioEn = (props) => {
    const [indicador, setIndicador] = useState(false)
    const [indicado, setIndicado] = useState(false)
    const [nome, setNome] = useState(false)
    const [email, setEmail] = useState(false)
    const [confirmEmail, setConfirmEmail] = useState(false)
    const [pais, setPais] = useState(false)
    const [moeda, setMoeda] = useState(false)
    const [pin, setPin] = useState(false)
    let pesquisaIndicador = props.navegacao == 'formulario' ? props.cadastrados.filter((elemento) => elemento.celular == indicador) : false
    let pesquisaIndicado = props.navegacao == 'formulario' ? props.cadastrados.filter((elemento) => elemento.celular == indicado) : false
    let pesquisaEmail = props.navegacao == 'formulario' ? props.cadastrados.filter((elemento) => elemento.email == email) : false
    console.log(props.cadastrados)
    if(props.navegacao == 'formulario' && props.idioma == 'ingles')return(
        <form action="https://wtnpay.com/cadastros/rotasForm/addform/" method="POST" className="flex flex-col w-screen h-screen items-center gap-2 text-xl font-sans text-zinc-500 md:w-96 mx-auto bg-cinzaPadao overflow-y-scroll">
            <img src={props.logo} className="w-2/5" />
            <label className="font-bold">Please complete your details</label>
            <input type='tel' placeholder={`Sponsor's mobile`} required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicador(e.target.value)} />
            <input type='tel' placeholder='Your mobile number' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicado(e.target.value)} />
            <input type='text' placeholder='Full name' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setNome(e.target.value)} />
            <input type='text' placeholder='Your email' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Confirm your email' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
            <input type='text' placeholder='Your country' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setPais(e.target.value)} />
            <input type='text' placeholder='Currency of your country' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setMoeda(e.target.value)} />
            <input type='text' maxLength='4' placeholder='Choose a 4-digit PIN' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setPin(e.target.value)} />
            <input type="submit" value="Send" className="px-6 py-3 mb-3 rounded-2xl text-white text-xl font-bold bg-zinc-600" onClick={(e) => {
                e.preventDefault()
                if(pesquisaIndicador[0] == undefined || pesquisaIndicado[0] != undefined || pesquisaEmail[0] != undefined || email != confirmEmail || pin.length != 4 || indicado == false || nome == false || email == false || pais == false || moeda == false){
                    if(pesquisaIndicador[0] == undefined){window.alert(`Indicator's cell phone number not registered.`)}
                    if(pesquisaIndicado[0] != undefined){window.alert('Mobile number already registered.')}
                    if(pesquisaEmail[0] != undefined){window.alert('E-mail already registered.')}
                    if(email != confirmEmail){window.alert('Email does not match email confirmation.')}
                    if(pin.length != 4){window.alert('Pin must contain 4 digits.')}
                    if(indicado == false || nome == false || email == false || pais == false || moeda == false){window.alert('Complete all fields.')}
                }else{
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
                    fetch('https://wtnpay.com/cadastros/rotasForm/addform', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(item)
                    }).then(props.setNavegacao('concluido'))
                }
            }} />
      </form>
    )
}

export default FormularioEn