import "./style.css";
import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer id="container-footer">
        <div className="box-footer">
            <div className="footer-content">
                <p>Camino Aventura &copy;copyrigh</p>
            </div>
            <div className="footer-content">
                <ul className="footer__menu">
                    <li className="list-a"><Link to="/">Inicio</Link></li>
                    <li className="list-a"><Link to="#">Contacto</Link></li>
                    <li className="list-a"><Link to="/cart">Carrito</Link></li>
                </ul>
            </div>
            <div className="footer-content">
                <img src="https://media.istockphoto.com/id/1288306293/es/vector/texto-de-c%C3%B3digo-java-digital-concepto-de-vector-de-codificaci%C3%B3n-de-software-inform%C3%A1tico.jpg?s=612x612&w=0&k=20&c=cPTFmbqjBW5yan7aBRFPzc36nvaOpy0TcsqX15fFDno=" alt="logo-computer"/> 
                <p>Desarrollador!</p>               
            </div>
        </div>
    </footer>
    )
}
export default Footer