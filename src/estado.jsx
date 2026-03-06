import { usestate } from "react";

function Estado(){
    const [Numero, setNumero] = usestate(0);
    return(
        <div>
            <h3>Contador: {Numero}</h3>
            <button onClick={() => setNumero(Numero + 1)}>aumentar</button>
            <button onClick={() => setNumero(Numero - 1)}>disminuir</button>
            <button onClick={() => setNumero(0)}>resetear</button>
        </div>
    )
}

export default Estado;