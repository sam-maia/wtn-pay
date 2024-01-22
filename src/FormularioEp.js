const FormularioEp = (props) => {
    return(
        <form className="flex flex-col w-screen h-screen items-center gap-2 text-xl font-sans text-zinc-500 md:w-96 mx-auto bg-cinzaPadao overflow-y-scroll">
            <img src={props.logo} className="w-2/5" />
            <label className="font-bold">Por favor, complete sus datos</label>
            <input type='tel' placeholder='Móvil del auspiciador' required className="border border-zinc-500 rounded-lg p-3" />
            <input type='tel' placeholder='Número de su móvil' required className="border border-zinc-500 rounded-lg p-3" />
            <input type='text' placeholder='Nombre completo' required className="border border-zinc-500 rounded-lg p-3" />
            <input type='text' placeholder='Su e-mail' required className="border border-zinc-500 rounded-lg p-3" />
            <input type='text' placeholder='Confirme su e-mail' required className="border border-zinc-500 rounded-lg p-3" />
            <input type='text' placeholder='Su país' required className="border border-zinc-500 rounded-lg p-3" />
            <input type='text' placeholder='Moneda de su país' required className="border border-zinc-500 rounded-lg p-3" />
            <input type='text' placeholder='Elija un PIN de 4 números' required className="border border-zinc-500 rounded-lg p-3" />
            <input type="submit" placeholder="Enviar" onClick={() => window.location.assign('/concluido')} className="px-6 py-3 mb-3 rounded-2xl text-white text-xl font-bold bg-zinc-600" />
      </form>
    )
}

export default FormularioEp