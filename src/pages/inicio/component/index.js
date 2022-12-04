import React from "react";
import Button from "../../../components/assets/buttons";
import { useNavigate} from "react-router-dom";


const Cart = ({item}) =>{
   
    
    const {id,nombre,categoria,precio,imagenes,marca}= item
    const navigate = useNavigate()
    const navClick = () =>{
        navigate(`/detalle/${id}`, {state: item})
    }


    return(
        <div className="cartProduct">
            <div className="box-img">
                <img onClick={navClick} className="imagenCard" src={imagenes[0]} alt={nombre}/>
            </div>

            <h3 className="text-cart">{nombre}</h3>
            <p className="text-cart">{categoria}</p> 
            <p className="text-cart">Marca: {marca}</p>
            <p className="text-cart">${precio}</p>
        
            <div className="cart-buttons">
                <Button onClick={navClick} text='ver producto!'></Button>
            </div>               
        </div>
    )
}
export default Cart