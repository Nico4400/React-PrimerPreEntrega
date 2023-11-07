import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Cart from "../Cart";
import { CartContext } from "../../context/cartContext";

import { Button } from "antd";
import { HomeOutlined, GiftOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';

import styles from './styles.module.css'

const CartContainer = () => {

    const { cart, limpiarCarrito, setcantidadCarrito } = useContext(CartContext)
    // const [carrito , setCarrito] = useState([])
    // const { cart } = useParams()

    // useEffect (() => {
    //     getCarrito(cart)
    //     cart
    //     .then(res => {
    //         setCart(res)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // },[cart])
    
    return(
        <div className={styles.Cart}> 
            { cart.length === 0 ?
            <>
                <div className={styles.Volver}>
                    <h2>El Carrito se Encuentra Vacio.</h2>
                    <Link to='/'><Button type="primary">Inicio <HomeOutlined /></Button></Link>
                    <NavLink to='/productos'><Button type="primary">Productos <GiftOutlined /></Button></NavLink>
                </div>
            </> :       
            <>          
                {cart.map(prod => <Cart key={prod.id} {...prod} />)}
                <div className={styles.Finalizar}>
                    <NavLink to='/productos'><Button type="primary">Productos <GiftOutlined /></Button></NavLink>
                    <Button type="primary" onClick={() => {}}>Finalizar Compra <CheckOutlined /></Button>
                    <Button type="primary" onClick={() => { limpiarCarrito(), setcantidadCarrito(0) }}>Vaciar Carrito <DeleteOutlined /></Button>
                </div>
            </>
            }
        </div>        
    )
}
export default CartContainer