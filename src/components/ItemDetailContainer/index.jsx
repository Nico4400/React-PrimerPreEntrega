import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getProductoById } from "../../asyncMock";
import ItemDetail from "../ItemDetail";



const ItemDetailContainer = () => {

    const [producto , setProducto] = useState(null)
    const { itemId } = useParams()

    useEffect (() => {
        getProductoById(itemId)
        .then(res => {
            setProducto(res)
        })
        .catch(err => {
            console.error(err);
        })
    },[itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto}/>
        </div>
    )
}
export default ItemDetailContainer