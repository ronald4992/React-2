import { usestate } from "react";
function Booleano() {
    const [booleano, setbooleano ] = usestate(true);

    let colorTexto;
    let mensaje;

    if (booleano == true) {
        colorTexto ="blue";
        mensaje = "El booleano es Verdadero";
    }else{
        colorTexto = "red";
        mensaje = "El booleano es falso";
    }

    return(
        <div>
            <h3 style={{ color: colorTexto}}>{mensaje}</h3>
            <button onClick={ () => setbooleano(!booleano)}>
            </button>
        </div>
    );
}

export default Booleano;