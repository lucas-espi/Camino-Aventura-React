import "./style.css";
import { useCartContext } from "../../components/assets/cartContext";
import { Link } from "react-router-dom";


const Cart = () =>{

    const {cart, setCart, clearCart } = useCartContext()


     const TotalPrice = () =>{
        const total = cart.reduce((acc, prod)=> acc + prod.precio * prod.cantidad, 0)
        return(
            
            <span className="total-price">Precio total: ${total}</span>
        )
    }

    const clearAllCart = () =>{
       return clearCart(cart)
    }

    if (cart.length === 0) {
        return(

            <>
        <div className="container__cart--box prev">
            <h1>No hay productos en el carrito</h1>
            <Link to={"/"} >Comprar productos!</Link>

        </div>
        </>
        )
    } else {
        return(
            <>
            <h1 className="title-cart">Carrito de compras <i class="fa-solid fa-cart-shopping"></i></h1>
            <div className="container__cart--box">
                {cart.map((prod)=>(
                    <div key={prod.id} className="card-cart" >
                        <div className="box__img--cart">
                            <img src={prod.imagenes[0]} alt={prod.nombre}/>
                        </div>
                            <h3>{prod.nombre}</h3>
                            <h3>${prod.precio}</h3>
                            <h3>x {prod.cantidad}</h3>
                            <button onClick={ ()=>{
                                let cardId = cart.filter (pro => pro.id !== prod.id)
                                // console.log('esto devuelve',cardId)
                                setCart([...cardId])
                            }} className="btn__delet" >Eliminar<i class="fa-solid fa-trash-can"></i></button>
                    </div>
                ))}
                    <div className="box-span">
                        <TotalPrice/>
                    </div>

                    <div className="box-btn">
                        <button onClick={clearAllCart} className="btn-vaciar">Vaciar carrito!<i class="fa-solid fa-trash-can"></i></button>
                        <button  className="btn-comprar">Fializar compra!</button>
                    </div>
            
            </div>
            </>
        )
    }

}
export default Cart