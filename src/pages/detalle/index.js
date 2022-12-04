
import React from "react";
import {useParams, useLocation} from "react-router-dom";
import SliderImg from "../../components/assets/slider";
import Button from "../../components/assets/buttons"
import './style.css'
import { useCartContext } from "../../components/assets/cartContext";


const Detalle = () =>{

    const {addProduct} = useCartContext()

    const onAdd = () => {  
      return addProduct(state)
    }


    const params = useParams()
    const {state} = useLocation()
    const {id,nombre,categoria,precio,imagenes,descripcion,}= state

    return(
        <>
        <h1 className="title-detalle">{nombre}</h1>
        <div className="containerCartDetalle">
            <div className="box__detalle">

                <div className="box__detalle--right  border">
                    <div className="box__detalle--img border">
                        <SliderImg images={imagenes} />
                    </div>

                    <div className="box__detalle--datos border">
                        <div>
                            <h3 className="text-cart">{nombre}</h3>
                            <p className="text-cart">Categoria:{categoria}</p> 
                            <p className="text-cart">Codigo del producto: {id}</p>
                            <p className="text-cart">Precio: ${precio}</p>
                        </div>
                
                        <div className="box__detalle--pago  border">
                            <p className="text-pagos">Medios de Pago:</p>
                            <div className="img-pagos">
                                <img src='https://i.imgur.com/Mhj6PH7.png' alt={nombre}/>
                                <img src='https://i.imgur.com/njf6dNp.png' alt={nombre}/>
                                <img src='https://i.imgur.com/ycRCSko.png' alt={nombre}/>
                            </div>
                            <p className="text-pagos">Cuotas 3, 6 y 12 <span>sin interes!</span></p>
                        </div>

                        <div className="cart-buttons">
                                <Button onClick={onAdd} text='Agregar al carrito!' type={'btn-detalle'}/>
                        </div> 

                    </div>
                </div>
                
                <div className="box__detalle--descripcion border">
                    <h3>Descripcion:</h3>
                    <p>{descripcion}</p>
                </div>            
            </div>
        </div>
        </>
    );

}
export default Detalle