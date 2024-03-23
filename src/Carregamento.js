const Carregamento = (props) => {
    if(props.carregamento) return(
        <div className="flex fixed top-0 w-screen h-screen bg-zinc-600 opacity-70 items-center justify-center">
            <div className="w-9 h-9 bg-amber-500 rounded-full opacity-100 animate-ping" />
        </div>
    )
}

export default Carregamento