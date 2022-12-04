import React from "react";
import "./style.css";


const Button = ({onClick, text,type}) => {
    return(
        <button onClick={onClick}  className={`btn-primary ${type}`} >{text}</button>
    )
}
export default Button