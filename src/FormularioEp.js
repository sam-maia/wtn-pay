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

    return(
        <form action="https://wtnpay.com/cadastros/rotasForm/addform/" method="POST" className="flex flex-col items-center w-full max-w-md mx-auto px-4 py-10 gap-4 text-base md:text-lg font-sans text-zinc-600">
            <img src={props.logo} className="w-32 md:w-48 mb-6" />
            <label className="font-bold text-center mb-2">Por favor, complete sus datos</label>

            <input type='tel' placeholder='Móvil del auspiciador' required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setIndicador(e.target.value)} />
            <input type='tel' placeholder='Número de su móvil' required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setIndicado(e.target.value)} />
            <input type='text' placeholder='Nombre completo' required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setNome(e.target.value)} />
            <input type='text' placeholder='Su e-mail' required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Confirme su e-mail' required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setConfirmEmail(e.target.value)} />
            <input type='text' placeholder='Su país' required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setPais(e.target.value)} />
            <input type='text' placeholder='Moneda de su país' required className="w-full border border-zinc-400 rounded-lg p-3" onChange={(e) => setMoeda(e.target.value)} />
            <input type='text' maxLength='4' placeholder='Elija un PIN de 4 números' required className="w-full border border-zinc-400 rounded-lg p-3 tracking-widest text-center" onChange={(e) => setPin(e.target.value)} />
            <input type="submit" value="Enviar" className="w-full px-6 py-3 mt-4 rounded-2xl text-white text-lg md:text-xl font-bold bg-zinc-600 hover:bg-zinc-700 transition cursor-pointer" onClick={(e) => {
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