import { useCartContext } from "../../context/cartContext";
import Formulario from "../listContainer/formulario/formulario";
import CompraVacia from "./compraVacia";

function ItemCart(){
    const { cartList , vaciarCart, eliminaItem, cantTotal, actualizarMenosCantidad, actualizarMasCantidad} = useCartContext()
    
    function cond (){
        if (cantTotal() === 0) {
        return true
        } else {
        return false
        }
    }
    if (cond()=== true) {
    return <CompraVacia/>
    }

    return(

    <div className="contenedorCart">
<div className="contenedorCards">
    {cartList.map(item =>
    
    <div className="itemCart" key={item.id}>
    <section className="section1"> 
    <p>{item.nombre}</p>
    <p>Cantidad: 
    <button onClick={()=>actualizarMenosCantidad(item.id)}>-</button> {item.cantidad} <button onClick={()=>actualizarMasCantidad(item.id)}>+</button>
    </p>
    </section >
    <section className="section2">
    <button onClick={()=> eliminaItem(item.id)} > X </button>
    </section>
    </div>
    )}
    </div>
    <div className="contenedorBoton">
    <div><Formulario /></div>
    <section><button onClick={vaciarCart}>Vaciar Carrito</button></section>
    </div>
    </div>
    )
    
}

export default ItemCart