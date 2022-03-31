import { useCartContext } from "../../context/cartContext"
import imagenCarrito from "./carrito-de-supermercado.png"
import "./carrito.css"

function CartWidget(){
    const {cantTotal}=useCartContext()

    function cond (){
        if (cantTotal() === 0) {
        return true
        } else {
        return false
        }
    }
    if (cond()=== true) {
    return <div className="contenedorCarrito"><img src={imagenCarrito}/></div>
    }

    return <div className="contenedorCarrito"><img src={imagenCarrito}/><p>{cantTotal()}</p></div>
    



}
export default CartWidget