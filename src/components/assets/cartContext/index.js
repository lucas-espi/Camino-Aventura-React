import React, {useContext, useState} from "react";
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext) //

const CartProvider = ({children}) =>{
    // Almacenamiento del carrito en estado
    const [cart, setCart] = useState([])

    // Funcion para vaciar carrito
    const clearCart = () => setCart([])

    //Funcion para agregar al carrito
    const addProduct = (item) => {
        const repite = cart.some (prod => prod.id === item.id)
        if (repite) {
            item.cantidad++
        } else {
            setCart([item, ...cart])
        }
    }

    return(
        <CartContext.Provider 
        value={
            { 
                clearCart,
                addProduct,
                cart,
                setCart
            }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider