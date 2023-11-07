import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductoById } from "../../asyncMock";
import ItemDetail from "../ItemDetail";

import { Spin } from 'antd';

import styles from './styles.module.css'


const ItemDetailContainer = () => {

    const [producto , setProducto] = useState(null)
    const[loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect (() => {
        getProductoById(itemId)
        .then(res => {
            setProducto(res)
        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => setLoading(false))
    },[itemId])

    return(
        <>
        { loading ? (
            <div className={styles.Spin}>
                <Spin size="large"/>
            </div>
        ) : (
        <div className={styles.ItemDetailContainer}>
            <ItemDetail {...producto}/>
        </div>
        )}
        </>
    )
}
export default ItemDetailContainer