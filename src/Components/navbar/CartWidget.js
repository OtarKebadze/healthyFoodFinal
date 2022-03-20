import { useCartContext } from "../../context/cartContext"
import imagenCarrito from "./carrito-de-supermercado.png"
import "./carrito.css"

function CartWidget(){
    const {cantTotal}=useCartContext()
    
    return(
        <div className="contenedorCarrito"><img src={imagenCarrito}/>{cantTotal()}</div>
    )
}
export default CartWidget