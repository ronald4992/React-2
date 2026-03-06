import { usestate } from "react";
function Lista() {
    const [nombres, setNombres] = usestate(["Ana", "Luis", "Carlos", "Daniel", "Gabriel"]);

    return (
        <div>
            <h3>Lista de nombres</h3>
            <ul>
                {nombres.map((nombre, index) =>(
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
            <button onClick={() => setNombres(nombres.slice(0, -1))}>
                Eliminar ultimo
            </button>
        </div>
    )
}

export default Lista;