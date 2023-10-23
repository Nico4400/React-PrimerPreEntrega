import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getCarrito } from "../ItemDetail";
import Cart from "../Cart";


const CartContainer = () => {

    const [carrito , setCarrito] = useState([])
    const { cart } = useParams()

    useEffect (() => {
        getCarrito(cart)
        .then(res => {
            setCarrito(res)
        })
        .catch(err => {
            console.error("esta aca",err);
        })
    },[cart])

    return(
        <div className="Cart">            
            <>          
                {carrito.map(prod => <Cart key={prod.id} {...prod} />)}
            </>
        </div>
    )
}
export default CartContainer