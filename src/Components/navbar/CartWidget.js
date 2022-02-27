import imagenCarrito from "./carrito-de-supermercado.png"
import "./carrito.css"

function CartWidget(){
    return(
    <div className="contenedorCarrito"><img src={imagenCarrito}/>: $0000,00</div>
    )
}
export default CartWidget