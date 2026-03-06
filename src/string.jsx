import { usestate } from "react";

function String(){
    const [texto, setTexto] = usestate("daniel");
    return(
        <div>
            <h3>{texto}</h3>
            <input
            type="text"
            onChange={(e) => setTexto(e.target.value)}
            />
        </div>
    )
}
export default String;