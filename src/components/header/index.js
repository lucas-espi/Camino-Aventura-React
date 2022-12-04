import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
import "../assets/img/C-Aventura.png";


const Navbar =()=> {
  return( 
    <header id="container-header">

     <Link to="/">
        <img className='img-logo' src="https://i.imgur.com/mnNTcYa.png" alt='Logo' />
     </Link>

        <nav className='nav-container'>
        <input className="menu-check" type="checkbox" name="menu-hamb" id="menu-hamb"/>
        <label className="menu-hamb" htmlFor="menu-hamb"><i className="fa-solid fa-bars"></i></label>

            <ul>
                <li className="list-a"><Link to="/">Inicio</Link></li>
                <li className="list-a"><Link to="#">Contacto</Link></li>
                <li className="list-a"><Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
            </ul>
        </nav>
    </header>
  );
}
export default Navbar;