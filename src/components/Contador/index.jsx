import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

// Inicio el contador
const Contador = ({stock, initial, onAdd}) => {
    // uso useStete
    const [ contador, setContador ] = useState(initial)

    // uso useEffect
    useEffect(() =>{
        console.log(`${contador}`)
    },[contador])

    const sumar = () => {
        contador < stock && setContador(contador + 1)
    }

    const restar = () => {
        contador > 1 && setContador(contador - 1)
    }
        
    return(
        <div className="Contador">
            <div className="Controles">
                <Button className="Boton" onClick={sumar}>+</Button>
                <p>{contador}</p>
                <Button className="Boton" onClick={restar}>-</Button>
            </div>

            <div className="Agregar">
                <Button className="Boton" onClick={() => onAdd(contador)} disabled={!stock}>Agregar</Button>
            </div>
            <div className="FavBoton">
                <Button>
                    <HeartOutlined />
                </Button>
            </div>
        </div>
    )
}
export default Contador