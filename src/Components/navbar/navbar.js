import CartWidget from "./CartWidget.js"
import "./navbar.css"
import imagenNombre from "./nombreEmpresa.png"
import {NavLink} from "react-router-dom"
import Cart from "./cart.js"

function NavBar (){
return(
<div className="contenedor__navbar">
<nav className="navbar">
<ul className="navbar__links">
<div><NavLink to="/" className="titulo">Inicio</NavLink></div>
<div><NavLink to="/categoria/Omnivora" className="titulo">Omnivora</NavLink></div>
<div><NavLink to="/categoria/Vegetariana" className="titulo">Vegetariana</NavLink></div>
<img className="nombreEmpresa" src={imagenNombre}/>
<div><NavLink to="/Cart" className="titulo">Carrito</NavLink></div>
</ul>
</nav>
<CartWidget/>
</div>
)
}

export default NavBar