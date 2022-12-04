import React from "react";
import "./style.css";



    const  SliderImg = ({images})=> {

        return (
            <>
            <div className="slider-container">
                    <img src={images[0]}/>
                    <img src={images[1]}/>
                    <img src={images[2]}/>
            </div>
            </>
            )
        }
      
    export default SliderImg;