import { useState } from "react"

const FormularioEp = (props) => {
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

    if(props.navegacao == 'formulario' && props.idioma == 'espanhol')return(
        <form action="https://wtnpay.com/cadastros/rotasForm/addform/" method="POST" className="flex flex-col w-screen h-screen items-center gap-2 text-xl font-sans text-zinc-500 md:w-96 mx-auto bg-cinzaPadao overflow-y-scroll">
            <img src={props.logo} className="w-2/5" />
            <label className="font-bold">Por favor, complete sus datos</label>
            <input type='tel' placeholder='Móvil del auspiciador' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicador(e.target.value)} />
            <input type='tel' placeholder='Número de su móvil' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setIndicado(e.target.value)} />
            <input type='text' placeholder='Nombre completo' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setNome(e.target.value)} />
            <input type='text' placeholder='Su e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Confirme su e-mail' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
            <input type='text' placeholder='Su país' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setPais(e.target.value)} />
            <input type='text' placeholder='Moneda de su país' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setMoeda(e.target.value)} />
            <input type='text' maxLength='4' placeholder='Elija un PIN de 4 números' required className="border border-zinc-500 rounded-lg p-3" onChange={(e) => setPin(e.target.value)} />
            <input type="submit" value="Enviar" className="px-6 py-3 mb-3 rounded-2xl text-white text-xl font-bold bg-zinc-600" onClick={(e) => {
                e.preventDefault()
                if(pesquisaIndicador[0] == undefined || pesquisaIndicado[0] != undefined || pesquisaEmail[0] != undefined || email != confirmEmail || pin.length != 4 || indicado == false || nome == false || email == false || pais == false || moeda == false){
                    if(pesquisaIndicador[0] == undefined){window.alert('¡El número de celular del indicador no está registrado!')}
                    if(pesquisaIndicado[0] != undefined){window.alert('¡Número de celular ya registrado!')}
                    if(pesquisaEmail[0] != undefined){window.alert('¡Correo electrónico ya registrado!')}
                    if(email != confirmEmail){window.alert('El correo electrónico no coincide con la confirmación del correo electrónico.')}
                    if(pin.length != 4){window.alert('El pin debe contener 4 dígitos.')}
                    if(indicado == false || nome == false || email == false || pais == false || moeda == false){window.alert('Complete todos los campos.')}
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

export default FormularioEp