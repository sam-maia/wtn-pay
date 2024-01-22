const FormularioPt = (props) => {
    return(
        <form action="http://localhost:5000/rotasForm/addform/" method="POST" className="flex flex-col w-screen h-screen items-center gap-2 text-xl font-sans text-zinc-500 md:w-96 mx-auto bg-cinzaPadao overflow-y-scroll">
            <img src={props.logo} className="w-2/5" />
            <label className="font-bold">Por favor, complete seus dados</label>
            <input name="indicador" type='tel' placeholder='Celular do indicador' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="celular" type='tel' placeholder='Número de seu celular' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="nome" type='text' placeholder='Nome completo' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="email" type='text' placeholder='Seu e-mail' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="confirmEmail" type='text' placeholder='Confirme seu e-mail' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="pais" type='text' placeholder='Seu país' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="moeda" type='text' placeholder='Moeda do país' required className="border border-zinc-500 rounded-lg p-3" />
            <input name="pin" type='pa' placeholder='Defina um PIN de 4 números' required className="border border-zinc-500 rounded-lg p-3" />
            <input type="submit" placeholder="Enviar" className="px-6 py-3 mb-3 rounded-2xl text-white text-xl font-bold bg-zinc-600" />
      </form>
    )
}

export default FormularioPt