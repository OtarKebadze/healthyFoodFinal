import { Link } from "react-router-dom"
import "./carrito.css"

function CompraVacia(){
    return(
        <div className="contenedorMensaje">
        <div className="contenedorMensaje2">
        <section id="titulo"><p>QUE ESTAS ESPERANDO PARA REALIZAR TU PRIMERA COMPRA !</p></section>
        </div>
        <div><Link to="/"><button>IR A PRODUCTOS</button></Link></div>
        </div>
    )
}
export default CompraVacia