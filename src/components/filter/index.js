import "./style.css";
import React, {useCallback, useRef} from "react";

const Filter = ({item, setItem}) =>{

    const prevProduct = Object.values(useRef(item))

        const targetInput =  useCallback((e) => {
            const inputFiltrar = e.target.value.trim().toLocaleLowerCase()
            if (inputFiltrar !== "") {
                const valueFilter = item.filter( prod => prod.nombre.includes(inputFiltrar)) 
                if (valueFilter.length > 0){ 
                    setItem([...valueFilter])
                } else if (valueFilter.length === 0) {
                    setTimeout(() => {
                        setItem(...prevProduct)    
                    }, 1500);
                } 
                else {
                    setItem(...prevProduct)
                }
            } else {
                setItem(...prevProduct)
            }
        }, [item, setItem]);
        
        
        return(
            <>
        <div className="input-serch" >
            <label className="serch-label" htmlFor="input-serch">Buscar: </label>
            <input onChange={targetInput} className="serch-input" id="input-serch" type="text" placeholder=" Encontrar producto..."/>
        </div>
        </>
    )

}
export default Filter