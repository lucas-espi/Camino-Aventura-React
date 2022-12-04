import React, {useState} from "react"
import "./style.css"

export const ItemCart = ({initial}) =>{
    const [count, setCount]=useState(initial)
    const decrease = () =>{
        setCount(count -1)
    }
    const increase = () =>{
        setCount(count +1)
    }

    let stock = 0
    
    return(
        <div className="item-cart">
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
        </div>
    )
}