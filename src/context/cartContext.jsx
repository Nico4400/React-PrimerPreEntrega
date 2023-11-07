import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

const CartComponentContext = ({children}) => {

    const [ cart, setCart] = useState([])
    const [ cantidadCarrito, setcantidadCarrito ] = useState(0)
    console.log(cart);  


    const sumar = (contador) => {
        setcantidadCarrito(cantidadCarrito + contador)    
    }

    const restar = (contador) => {
        setcantidadCarrito(cantidadCarrito - contador)    
    }

    const agregarItem = (item, cantidad) => {
        { !estaEnCarrito(item.id) ? 
            setCart(prev => [...prev, {...item, cantidad}]) :            
            console.error('El producto ya fue agregado')
        }
    }

    const actualizarCarrito = (item, cantidades) => {
        { estaEnCarrito(item.id) ?            
            cart[indexCarrito(item.id)].cantidad = cantidades :
            console.log(`No hay cantidades suficientes`)
        }
    }

    const estaEnCarrito = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const indexCarrito = (itemId) => {
        return cart.findIndex(prod => prod.id === itemId)
    }

    const eliminarItem = (itemId) => {
        const actualizarCarrito = cart.filter(prod => prod.id !== itemId)
        setCart(actualizarCarrito)
    }

    const limpiarCarrito = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{ cart, setCart, cantidadCarrito, setcantidadCarrito, sumar, restar, agregarItem, estaEnCarrito, actualizarCarrito, indexCarrito, eliminarItem, limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext