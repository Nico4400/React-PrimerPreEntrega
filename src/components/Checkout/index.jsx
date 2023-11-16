import { useContext, useState } from "react"

import CheckoutForm from "../CheckoutForm"
import { CartContext } from "../../context/cartContext"
import { addDoc, collection, Timestamp, writeBatch } from "firebase/firestore"
import { db } from '../../services/firebase/client'

import { Spin } from "antd";

import styles from './styles.module.css'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, limpiarCarrito, precioTotalCarrito, setcantidadCarrito } = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const order = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: precioTotalCarrito,
                date: Timestamp.fromDate(new Date())
            }
        
        
        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, order)
        
        setOrderId(orderAdded.id)

        limpiarCarrito()
        setcantidadCarrito(0)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    // { loading && (
    //     <>
    //         <div className={styles.Spin}>
    //             <h1>Se esta generando su orden...</h1>
    //             <Spin size="large"/>
    //         </div>
    //     </>
    // )}

    // { orderId && (
    //     <>
    //         <div className={styles.Order}>
    //             <h1>El ID de su compra es: {orderId}</h1>            
    //         </div> 
    //     </> 
    // )}      
    
    if(loading) {
        return (  
            <div className={styles.Spin}>
                <h1>Se esta generando su orden...</h1>
                <Spin size="large"/>
            </div>
        )
    }
    if(orderId) {
        return (
            <div className={styles.Order}>
                <h1>El ID de su compra es: {orderId}</h1>            
            </div>
        )   
    }
            
    return (
        <div className={styles.Datos}>
            <h2>Datos Personales</h2>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}
export default Checkout