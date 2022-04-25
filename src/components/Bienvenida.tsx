
type BienvenidaProps = {
    name:string
    contadorMensajes?:number
    logeado:boolean
}


 const Bienvenida = (props:BienvenidaProps) => {
    const {contadorMensajes = 0} = props
    return(
        <div>
           {props.logeado?(<h2>Bienvenido {props.name}, tienes {props.contadorMensajes} mensajes</h2>):(<p>No hay nadie logeado.</p>)}
        </div>
    );
}
export default Bienvenida;