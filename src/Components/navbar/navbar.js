import "./navbar.css"
import imagen from "./carrito-de-supermercado.png"


function NavBar (){
return(
<div className="contenedor__navbar">
<nav className="navbar">
<ul className="navbar__links">
<div><a href="#" className="titulo">Inicio</a></div>
<div><a href="#" className="titulo">Sobre Nosotros</a></div>
<div><a href="#" className="titulo">Productos</a></div>
<div><a href="#" className="titulo">Contacto</a></div>
</ul>
</nav>
<img src={imagen}/>
</div>
)
}

export default NavBar